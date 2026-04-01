import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "NexusTalk бесплатный?",
      answer:
        "Да, базовая версия полностью бесплатна. Голосовые каналы, текстовые чаты и серверы доступны без оплаты. Платная подписка NexusTalk Pro открывает HD-качество голоса, расширенные боты и кастомные стикеры.",
    },
    {
      question: "Сколько человек может быть в голосовом канале?",
      answer:
        "В бесплатной версии — до 50 человек в канале. В Pro-версии лимит увеличивается до 512 участников. Для киберспортивных турниров доступны специальные серверы без ограничений.",
    },
    {
      question: "Работает ли NexusTalk на слабом интернете?",
      answer:
        "Да, мы оптимизировали кодек специально для нестабильного соединения. NexusTalk отлично работает от 1 Мбит/с. Адаптивное качество автоматически подстраивается под скорость вашего интернета.",
    },
    {
      question: "Как работает шумоподавление?",
      answer:
        "Встроенный ИИ-фильтр убирает фоновые звуки в реальном времени: клавиатуру, вентиляторы, шум улицы. Работает локально на устройстве — никакие аудиоданные не передаются на сервер.",
    },
    {
      question: "Можно ли стримить игру через NexusTalk?",
      answer:
        "Да! Функция «Экран» позволяет транслировать игру прямо в голосовом канале. Друзья видят ваш экран в разрешении до 1080p 60fps, находясь в том же канале.",
    },
    {
      question: "На каких платформах доступен NexusTalk?",
      answer:
        "Windows, macOS, Linux, iOS и Android. Также есть веб-версия — можно зайти прямо из браузера без установки. Все устройства синхронизируются автоматически.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что хочешь знать о NexusTalk — от цен до технических возможностей.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-violet-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-violet-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}