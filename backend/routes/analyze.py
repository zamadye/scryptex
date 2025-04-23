from fastapi import APIRouter, Depends, HTTPException
from typing import Optional

from models.user import User
from schemas.analyze import (
    ProjectAnalyzeRequest,
    AnalyzeHistoryRequest,
    FetcherRequest,
    ProjectIdRequest
)
from utils.jwt import get_current_user
from utils.helper import generate_response
from services.fetcher_runner import FetcherRunner
from core.database import db

router = APIRouter(prefix="/analyze", tags=["Analyzer"])


@router.post("")
async def analyze_project(
    request: ProjectAnalyzeRequest,
    current_user: Optional[User] = Depends(get_current_user)
):
    runner = FetcherRunner(
        project_name=request.project_name,
        website=request.website,
        fetch_type="all"
    )
    result = await runner.analyze_project(
        project_data=request.dict(),
        user=current_user
    )
    return generate_response(data=result, message="Project analysis initiated")


@router.post("/fetcher")
async def run_fetcher_by_type(
    request: FetcherRequest,
    current_user: Optional[User] = Depends(get_current_user)
):
    runner = FetcherRunner(
        project_name=request.project_name,
        website=request.website,
        fetch_type=request.fetcher_type
    )
    result = await runner.run_specific_fetcher(
        project_id=request.project_id,
        fetcher_type=request.fetcher_type,
        user=current_user
    )
    return generate_response(data=result, message="Fetcher executed successfully")


@router.post("/history")
async def get_analyze_history(
    request: AnalyzeHistoryRequest,
    current_user: Optional[User] = Depends(get_current_user)
):
    query = {
        "user_id": current_user.id,
        "project_name": request.project_name
    }
    result = await db["fetchers_results"].find_one(query)
    if not result:
        raise HTTPException(status_code=404, detail="No history found")
    return generate_response(data=result, message="Analysis history retrieved")


@router.post("/delete")
async def delete_analyze_result(
    request: ProjectIdRequest,
    current_user: Optional[User] = Depends(get_current_user)
):
    deleted = await db["projects"].delete_one({
        "_id": request.project_id,
        "user_id": current_user.id
    })
    return generate_response(data={"deleted_count": deleted.deleted_count})
