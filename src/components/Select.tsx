"use client"

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

type InquirySelectProps = {
    placeholder: string;
    value: string; // 選択された値
    onChange: (value: string) => void;
};

const DepartmentSelect = ({placeholder, value, onChange}:InquirySelectProps) => {
    return (
        <>
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="ck">CK</SelectItem>
                    <SelectItem value="dark">damy</SelectItem>
                </SelectContent>
            </Select>
        </>
    )
}

const SystemSelect = ({placeholder}:InquirySelectProps) => {
    return (
        <>
            <Select>
                <SelectTrigger className="w-full">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="cold">市技報から寒冷地案件を抽出</SelectItem>
                    <SelectItem value="vocal">入電情報から類似案件を抽出</SelectItem>
                </SelectContent>
            </Select>
        </>
    )
}

export { DepartmentSelect, SystemSelect }