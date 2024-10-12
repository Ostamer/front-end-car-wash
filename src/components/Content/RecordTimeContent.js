import React, { useState } from "react";

const TimePicker = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const dates = ["25 сентября", "26 сентября", "27 сентября"];
  const times = [
    "15:00",
    "15:15",
    "15:30",
    "15:45",
    "16:00",
    "16:15",
    "16:30",
    "16:45"
  ];

  const handleTimeChange = (date, time) => {
    setSelectedDate(date); // Обновляем выбранную дату
    setSelectedTime(time); // Обновляем выбранное время
  };

  return (
    <div>
      {/* Основной контейнер с вертикальной прокруткой */}
      <div className="max-h-80 overflow-y-scroll space-y-4 border-b">

        {/* Для каждой даты создаем блок */}
        {dates.map((date, index) => (
          <div key={index}>
            {/* Отображение даты */}
            <div
              className={`text-lg font-semibold mb-2 ${
                selectedDate === date ? "text-blue-500" : "text-gray-900"
              }`}
            >
              {date}
            </div>

            {/* Время для выбранной даты */}
            <div className="grid grid-cols-4 gap-1">
              {times.map((time, idx) => (
                <button
                  key={idx}
                  className={`p-2 rounded-2xl border h-12 border ${
                    selectedDate === date && selectedTime === time
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-900"
                  }`}
                  onClick={() => handleTimeChange(date, time)} // Выбор времени обновляет как время, так и дату
                >
                  {time}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Отображение выбранного времени и даты */}
      <button className="w-full flex items-center justify-between p-4 bg-blue-500 text-white rounded-2xl mt-4">
        <div className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-blue-600"
            checked={!!selectedTime && !!selectedDate}
            readOnly
          />
          <span className="ml-2">Выбрать</span>
        </div>
        <span>
          {selectedTime && selectedDate
            ? `${selectedDate}, ${selectedTime}`
            : "Выберите время"}
        </span>
      </button>
    </div>
  );
};

export default TimePicker;
