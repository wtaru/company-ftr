import { InquiryForm } from "@/components/Form"

export default function Inquiry() {
    return (
        <main className="flex-grow bg-gray-400 flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-6 w-[500px]">
                <h2 className="text-xl font-semibold mb-4 text-center">お問い合せフォーム</h2>
                <small className="my-4 block text-gray-500">要望や使用上の困り事を入力して下さい</small>
                <InquiryForm/>
            </div>
        </main>
    )
}