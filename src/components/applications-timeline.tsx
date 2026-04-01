import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Голосовые каналы",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Создавай отдельные голосовые комнаты для каждого режима игры. Рейд, PvP, тренировка — у каждого своя
            комната со своими правилами и участниками.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              До 512 участников в одном канале
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Роли и права: капитан, наблюдатель, зритель
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Пуш-для-говорения или детектор активности голоса
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Игровые серверы",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Создай свой сервер для клана, гильдии или сообщества. Неограниченные каналы, кастомные роли и боты для
            автоматизации — всё для твоей игровой тусовки.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Текстовые и голосовые каналы без ограничений
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Кастомные эмодзи и стикеры для сервера
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Интеграция с игровыми платформами Steam, Xbox, PlayStation
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Стриминг и зрители",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Транслируй экран прямо внутри NexusTalk. Зрители видят твою игру и слышат комментарии — идеально для
            киберспортивных тренировок и стримов для друзей.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Трансляция экрана в 1080p 60fps
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Режим «Зритель» — смотри без голоса
            </div>
            <div className="flex items-center gap-3 text-violet-400 text-sm">
              <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
              Реакции в реальном времени от зрителей
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Всё для вашей команды</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            NexusTalk создан геймерами для геймеров. Каждая функция — ответ на реальную боль игровых команд.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}