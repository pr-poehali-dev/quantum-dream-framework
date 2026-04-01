import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function DownloadSection() {
  return (
    <section className="py-24 px-6 bg-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-violet-600/20 border border-violet-500/30 rounded-full px-4 py-2 mb-6">
              <Icon name="Smartphone" size={16} className="text-violet-400" />
              <span className="text-violet-300 text-sm font-space-mono">Доступно на Android</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron leading-tight">
              Играй и общайся<br />
              <span className="text-violet-400">прямо с телефона</span>
            </h2>

            <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg">
              Полная версия NexusTalk у тебя в кармане. Голосовые каналы, чаты и уведомления работают так же быстро,
              как на ПК — даже на мобильном интернете.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="bg-violet-600 hover:bg-violet-700 text-white gap-3 text-base px-6 py-6 w-full sm:w-auto"
                >
                  <Icon name="Play" size={20} className="fill-white" />
                  <div className="text-left">
                    <div className="text-xs opacity-80 leading-none mb-1">Скачать в</div>
                    <div className="font-bold leading-none">Google Play</div>
                  </div>
                </Button>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-violet-500/40 rounded-lg px-6 py-3 transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <Icon name="Download" size={20} className="text-violet-400" />
                <div className="text-left">
                  <div className="text-xs text-gray-400 leading-none mb-1">Скачать APK</div>
                  <div className="text-white font-bold text-sm leading-none">Прямая ссылка</div>
                </div>
              </a>
            </div>

            <div className="flex items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Icon name="Shield" size={16} className="text-violet-400" />
                <span>Безопасно</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Icon name="Zap" size={16} className="text-violet-400" />
                <span>Без рекламы</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Icon name="RefreshCw" size={16} className="text-violet-400" />
                <span>Авто-обновления</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="relative">
              <div className="w-64 h-64 bg-violet-600/10 border border-violet-500/20 rounded-3xl flex flex-col items-center justify-center gap-4 backdrop-blur-sm">
                <div className="w-32 h-32 bg-violet-600/30 rounded-2xl flex items-center justify-center border border-violet-500/40">
                  <Icon name="MessageCircle" size={56} className="text-violet-300" />
                </div>
                <div className="text-center px-4">
                  <p className="text-white font-orbitron font-bold text-lg">NexusTalk</p>
                  <p className="text-gray-400 text-xs font-space-mono mt-1">для Android</p>
                </div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-violet-600 rounded-2xl px-3 py-2 shadow-lg shadow-violet-500/30">
                <p className="text-white text-xs font-bold font-space-mono">v2.1.0</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-black border border-violet-500/30 rounded-2xl px-3 py-2">
                <p className="text-gray-400 text-xs font-space-mono">Android 8.0+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
