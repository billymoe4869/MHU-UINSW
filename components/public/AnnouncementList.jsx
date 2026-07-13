"use client";

import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function AnnouncementList({ data }) {
  const [openId, setOpenId] = useState(null);

  function toggleOpen(id) {
    setOpenId((prev) => (prev === id ? null : id));
  }

  return (
    <div className="flex flex-col gap-3">
      {data.map((item) => {
        const isOpen = openId === item.id;
        const formattedDate = item.publishedAt
          ? new Date(item.publishedAt).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })
          : null;

        return (
          <div
            key={item.id}
            className="border border-stone-200 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleOpen(item.id)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-stone-50 transition"
            >
              <div>
                <h3 className="font-semibold text-stone-800">{item.title}</h3>
                {formattedDate && (
                  <p className="text-xs text-stone-400 mt-1">{formattedDate}</p>
                )}
              </div>
              <MdKeyboardArrowDown
                className={`size-5 text-stone-400 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-4 pb-4 text-stone-600 whitespace-pre-line leading-relaxed">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
