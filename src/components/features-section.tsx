import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Голос без задержек",
    description: "Кристально чистый голосовой чат с задержкой менее 20 мс. Слышишь команды тиммейтов мгновенно — каждая миллисекунда на счету.",
    icon: "brain",
    badge: "< 20мс",
  },
  {
    title: "Шифрование разговоров",
    description: "Сквозное шифрование всех голосовых и текстовых сообщений. Твои стратегии остаются только внутри команды.",
    icon: "lock",
    badge: "E2E",
  },
  {
    title: "Игровые комнаты",
    description: "Создавай голосовые комнаты под каждую игру, роль или режим. Мгновенное переключение между каналами одним кликом.",
    icon: "globe",
    badge: "Команды",
  },
  {
    title: "Шумоподавление ИИ",
    description: "Искусственный интеллект убирает звуки клавиатуры, фановой системы и окружения — слышен только ты.",
    icon: "zap",
    badge: "AI Noise",
  },
  {
    title: "Игровые оверлеи",
    description: "Миниатюрное окно мессенджера поверх любой игры. Видишь кто говорит, не выходя из матча.",
    icon: "link",
    badge: "Оверлей",
  },
  {
    title: "Кроссплатформенность",
    description: "Работает на Windows, macOS, iOS и Android. Начни общение на ПК — продолжи с телефона.",
    icon: "target",
    badge: "Везде",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Создан для победы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Всё, что нужно команде для синхронной игры — голос, чат и управление в одном месте
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}