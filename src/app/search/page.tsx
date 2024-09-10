"use client"
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function index() {
    const searchParam = useSearchParams();
    // console.log("Đường link hiện tại", window.location.href);
    return (
        <div>
            <input type='text' value={String(searchParam?.get("xxx"))}></input>
            <span>{searchParam?.get("ddd")}</span>
        </div>
    )
}

