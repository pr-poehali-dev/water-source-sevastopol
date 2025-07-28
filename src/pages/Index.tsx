import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
      {/* Ocean Wave Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-cyan-500/20 via-blue-500/10 to-transparent transform rotate-1 -translate-y-12"></div>
        <div className="absolute bottom-0 left-0 w-full h-80 bg-gradient-to-t from-blue-400/30 via-cyan-400/15 to-transparent transform -rotate-1 -translate-y-8"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-teal-300/40 via-blue-300/20 to-transparent transform rotate-2 -translate-y-4"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-cyan-400/20 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Waves" className="text-cyan-400" size={32} />
              <span className="text-2xl font-bold text-white">Источник Севастополя</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'product', label: 'О продукте' },
                { id: 'quality', label: 'Качество' },
                { id: 'delivery', label: 'Доставка' },
                { id: 'contacts', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-cyan-300 ${
                    activeSection === item.id ? 'text-cyan-300' : 'text-slate-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button className="hidden md:flex bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 border-0">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-24 px-4 relative z-10">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl">
              Источник
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300 block">
                Севастополя
              </span>
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
              Премиальная питьевая вода из глубин Чёрного моря. 
              Современные технологии очистки сохраняют кристальную чистоту океана.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="text-lg px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-xl border-0">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Заказать воду
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-10 py-4 border-cyan-300 text-cyan-300 hover:bg-cyan-300/10 shadow-xl">
                <Icon name="Droplets" size={20} className="mr-2" />
                О качестве
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Product Section */}
      <section id="product" className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">О нашем продукте</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Мы используем передовые технологии для создания воды океанического качества
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-gradient-to-b from-slate-700 to-slate-800 border-cyan-400/30 hover:border-cyan-300/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon name="Beaker" className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Глубоководная очистка</h3>
                <p className="text-slate-300 leading-relaxed">
                  Многоступенчатая система фильтрации, имитирующая естественные океанические процессы
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-b from-slate-700 to-slate-800 border-cyan-400/30 hover:border-cyan-300/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon name="Factory" className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Морской стандарт</h3>
                <p className="text-slate-300 leading-relaxed">
                  Автоматизированная линия розлива с защитой от внешних воздействий
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-b from-slate-700 to-slate-800 border-cyan-400/30 hover:border-cyan-300/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
              <CardContent className="p-0">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Icon name="Award" className="text-white" size={36} />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Океанское качество</h3>
                <p className="text-slate-300 leading-relaxed">
                  Превосходим международные стандарты морской воды премиум-класса
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-20 px-4 bg-gradient-to-b from-blue-900/50 to-cyan-900/50 relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Качество и сертификаты</h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Наша продукция соответствует всем требованиям морских стандартов качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <Icon name="Check" className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">ГОСТ Р 52109-2003</h3>
                    <p className="text-slate-300 leading-relaxed">Соответствие государственным стандартам качества питьевой воды</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <Icon name="Check" className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">ISO 22000</h3>
                    <p className="text-slate-300 leading-relaxed">Международный стандарт безопасности пищевой продукции</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                    <Icon name="Check" className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-white">Морские исследования</h3>
                    <p className="text-slate-300 leading-relaxed">Ежедневный контроль качества в океанографической лаборатории</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="p-8 bg-gradient-to-r from-slate-700/80 to-slate-800/80 border-cyan-400/30 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white text-lg">Минерализация</span>
                    <span className="text-cyan-300 font-bold text-xl">200-400 мг/л</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gradient-to-r from-slate-700/80 to-slate-800/80 border-cyan-400/30 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white text-lg">pH уровень</span>
                    <span className="text-cyan-300 font-bold text-xl">7.2-7.8</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-8 bg-gradient-to-r from-slate-700/80 to-slate-800/80 border-cyan-400/30 backdrop-blur-sm">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white text-lg">Солёность</span>
                    <span className="text-cyan-300 font-bold text-xl">2-4 мг-экв/л</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Доставка и заказ</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Быстрая и надёжная доставка морского качества по всему Севастополю
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-8 text-center bg-gradient-to-b from-slate-700 to-slate-800 border-cyan-400/20 hover:border-cyan-300/40 transition-all duration-300">
              <CardContent className="p-0">
                <Icon name="Ship" className="text-cyan-400 mx-auto mb-6" size={48} />
                <h3 className="font-semibold mb-3 text-white text-lg">Морская скорость</h3>
                <p className="text-slate-300 text-sm">В течение 2 часов по городу</p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-b from-slate-700 to-slate-800 border-cyan-400/20 hover:border-cyan-300/40 transition-all duration-300">
              <CardContent className="p-0">
                <Icon name="Phone" className="text-cyan-400 mx-auto mb-6" size={48} />
                <h3 className="font-semibold mb-3 text-white text-lg">Прямая связь</h3>
                <p className="text-slate-300 text-sm">+7 (978) 123-45-67</p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-b from-slate-700 to-slate-800 border-cyan-400/20 hover:border-cyan-300/40 transition-all duration-300">
              <CardContent className="p-0">
                <Icon name="CreditCard" className="text-cyan-400 mx-auto mb-6" size={48} />
                <h3 className="font-semibold mb-3 text-white text-lg">Удобная оплата</h3>
                <p className="text-slate-300 text-sm">Наличными или картой</p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-b from-slate-700 to-slate-800 border-cyan-400/20 hover:border-cyan-300/40 transition-all duration-300">
              <CardContent className="p-0">
                <Icon name="Anchor" className="text-cyan-400 mx-auto mb-6" size={48} />
                <h3 className="font-semibold mb-3 text-white text-lg">Морской порт</h3>
                <p className="text-slate-300 text-sm">Весь Севастополь</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-slate-700/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-10 max-w-3xl mx-auto border border-cyan-400/20">
              <h3 className="text-3xl font-bold mb-6 text-white">Закажите прямо сейчас</h3>
              <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                Минимальный заказ - 2 бутыли 19л. Бесплатная доставка от 5 бутылей.<br/>
                Океанское качество прямо к вашему порогу.
              </p>
              <Button size="lg" className="text-xl px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 shadow-2xl border-0">
                <Icon name="Phone" size={24} className="mr-3" />
                +7 (978) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-blue-900/50 to-slate-900">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Контакты</h2>
            <p className="text-xl text-slate-200 max-w-3xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-gradient-to-b from-slate-700/80 to-slate-800/80 border-cyan-400/30 backdrop-blur-sm">
              <CardContent className="p-0">
                <Icon name="Phone" className="text-cyan-400 mx-auto mb-6" size={48} />
                <h3 className="font-semibold mb-4 text-white text-xl">Телефон</h3>
                <p className="text-slate-300 text-lg mb-2">+7 (978) 123-45-67</p>
                <p className="text-slate-400">Ежедневно с 8:00 до 22:00</p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-b from-slate-700/80 to-slate-800/80 border-cyan-400/30 backdrop-blur-sm">
              <CardContent className="p-0">
                <Icon name="Mail" className="text-cyan-400 mx-auto mb-6" size={48} />
                <h3 className="font-semibold mb-4 text-white text-xl">Email</h3>
                <p className="text-slate-300 text-lg mb-2">info@sevastopol-water.ru</p>
                <p className="text-slate-400">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card className="p-8 text-center bg-gradient-to-b from-slate-700/80 to-slate-800/80 border-cyan-400/30 backdrop-blur-sm">
              <CardContent className="p-0">
                <Icon name="MapPin" className="text-cyan-400 mx-auto mb-6" size={48} />
                <h3 className="font-semibold mb-4 text-white text-xl">Адрес</h3>
                <p className="text-slate-300 text-lg mb-2">г. Севастополь</p>
                <p className="text-slate-300">ул. Морская, 15</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-cyan-400/20 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <Icon name="Waves" className="text-cyan-400" size={28} />
              <span className="text-2xl font-bold">Источник Севастополя</span>
            </div>
            <p className="text-slate-400 text-lg">
              © 2024 Источник Севастополя. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}