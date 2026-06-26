"use client";

export default function ConfirmModal({ title, message, isOpen, onClose, onConfirm }) {
    if (!isOpen) return null; 
    return (
        <div className="fixed inset-0 z-50 justify-center items-center flex bg-black/50 backdrop-blur-sm">
            <div className="w-full bg-white rounded-lg p-6 max-w-md scale-100 transition-all">
                <h2 className="text-2xl font-semibold mb-3">{title}</h2>
                <p className="mb-6 text-gray-600">{message}</p>
            <div className="flex justify-end gap-3 mt-4 font-semibold">
                <button onClick={onClose} className="px-4 py-2 rounded-xl bg-gray-200 cursor-pointer hover:bg-gray-300">Batal</button>
                <button onClick={onConfirm} className="px-4 py-2 rounded-xl bg-red-600 cursor-pointer hover:bg-red-700">Hapus</button>
            </div>
            </div>
        </div>
    )
}