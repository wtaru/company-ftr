"use client"

import { useState } from "react";
import { SystemSelect } from "./Select";
import Link from "next/link";

export default function Sidebar() {
    // システムの選択状態を管理
    const [selectedSystem, setSelectedSystem] = useState("");

    // 開始・終了期間の管理
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    // 選択されたシステムの値を更新
    const handleSystemChange = (value: string) => {
        setSelectedSystem(value);
        console.log("選択システム:", value);
    };

    //今日の日時を表示
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    
    const toTwoDigits = function (num:number, digit:number) {
        let num_str = String(num)
        num_str += ''
        if (num_str.length < digit) {
        num_str = '0' + num_str
        }
        return num_str
    }
    
    const yyyy = toTwoDigits(year, 4)
    const mm = toTwoDigits(month, 2)
    const dd = toTwoDigits(day, 2)
    const ymd = yyyy + "-" + mm + "-" + dd;
    

    return (
        <div className="w-64 bg-gray-400 text-white flex flex-col">
            <div className="text-center p-2 text-xl font-bold bg-zinc-800 border-t border-t-slate-500">
                期間の選択
            </div>   
            <div className="mt-4 flex">
                <p className="pt-1 pr-1 box ml-4 font-bold">開始日：</p>
                <input name="date" type="date" className="bg-zinc-600 text-center rounded-md border border-slate-300 py-1 flex-grow mr-4"/>
            </div>
            <div className="mt-2 flex"> 
                <p className="pt-1 pr-1 box ml-4 font-bold">終了日：</p>
                <input id="today" name="date" type="date" className="bg-zinc-600 text-center rounded-md border border-slate-300 py-1 flex-grow mr-4" value={ymd}/>
            </div>

            <div className="mt-6 text-center p-2 text-xl font-bold bg-zinc-800 border-t border-t-slate-500">
                システムの選択
            </div>
            <div className="mx-4 bg-zinc-600 rounded-md mt-4">
                <SystemSelect
                    placeholder="システム名"
                    value={selectedSystem}
                    onChange={handleSystemChange}
                />
            </div>
            
            <div className="p-2 text-right">
                <button type="submit" className="text-xm px-4 mr-2 calc(w-full/2) bg-blue-700 p-2 rounded hover:bg-blue-500">
                    データを取得
                </button>
            </div>
            <div className="mt-3 border-t border-t-slate-300"/>
            <div className="mx-4 my-3">
                <div  className="text-xm w-full bg-gray-800 rounded hover:bg-gray-600">
                    <Link href={"/"} className="flex flex-col items-center font-bold py-2">ダッシュボードへ</Link>
                </div>
            </div>
            <div className="h-40"></div>
            <div className="h-2"></div>
        </div>
    );
}
