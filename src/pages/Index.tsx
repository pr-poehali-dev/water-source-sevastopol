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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-blue-100 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Droplets" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-primary">Источник Севастополя</span>
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
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-gray-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <Button className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Заказать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Источник
              <span className="text-primary block">Севастополя</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Премиальная питьевая вода с современными технологиями очистки и розлива.
              Кристальная чистота природы в каждой капле.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Заказать воду
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                <Icon name="Info" size={20} className="mr-2" />
                О качестве
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Product Section */}
      <section id="product" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">О нашем продукте</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы используем передовые технологии для создания воды высочайшего качества
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Beaker" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Современная очистка</h3>
                <p className="text-gray-600">
                  Многоступенчатая система фильтрации с использованием новейших технологий
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Factory" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Автоматизированный розлив</h3>
                <p className="text-gray-600">
                  Полностью автоматизированная линия розлива без контакта с внешней средой
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3">Премиальное качество</h3>
                <p className="text-gray-600">
                  Превосходим все стандарты качества питьевой воды в России
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="quality" className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Качество и сертификаты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Наша продукция соответствует всем требованиям безопасности и качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">ГОСТ Р 52109-2003</h3>
                    <p className="text-gray-600">Соответствие государственным стандартам качества питьевой воды</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">ISO 22000</h3>
                    <p className="text-gray-600">Международный стандарт безопасности пищевой продукции</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Check" className="text-white" size={16} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Лабораторные исследования</h3>
                    <p className="text-gray-600">Ежедневный контроль качества в аккредитованной лаборатории</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <Card className="p-6 border-blue-200">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Минерализация</span>
                    <span className="text-primary font-bold">200-400 мг/л</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-blue-200">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">pH уровень</span>
                    <span className="text-primary font-bold">7.2-7.8</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 border-blue-200">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">Жёсткость</span>
                    <span className="text-primary font-bold">2-4 мг-экв/л</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Доставка и заказ</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Быстрая и надёжная доставка по всему Севастополю
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center border-blue-100">
              <CardContent className="p-0">
                <Icon name="Truck" className="text-primary mx-auto mb-4" size={40} />
                <h3 className="font-semibold mb-2">Быстрая доставка</h3>
                <p className="text-gray-600 text-sm">В течение 2 часов по городу</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-blue-100">
              <CardContent className="p-0">
                <Icon name="Phone" className="text-primary mx-auto mb-4" size={40} />
                <h3 className="font-semibold mb-2">Заказ по телефону</h3>
                <p className="text-gray-600 text-sm">+7 (978) 123-45-67</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-blue-100">
              <CardContent className="p-0">
                <Icon name="CreditCard" className="text-primary mx-auto mb-4" size={40} />
                <h3 className="font-semibold mb-2">Оплата</h3>
                <p className="text-gray-600 text-sm">Наличными или картой</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-blue-100">
              <CardContent className="p-0">
                <Icon name="MapPin" className="text-primary mx-auto mb-4" size={40} />
                <h3 className="font-semibold mb-2">Зона доставки</h3>
                <p className="text-gray-600 text-sm">Весь Севастополь</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-blue-50 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Закажите прямо сейчас</h3>
              <p className="text-gray-600 mb-6">
                Минимальный заказ - 2 бутыли 19л. Бесплатная доставка от 5 бутылей.
              </p>
              <Button size="lg" className="text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                +7 (978) 123-45-67
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <Icon name="Phone" className="text-primary mx-auto mb-4" size={40} />
                <h3 className="font-semibold mb-2">Телефон</h3>
                <p className="text-gray-600">+7 (978) 123-45-67</p>
                <p className="text-gray-600">Ежедневно с 8:00 до 22:00</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <Icon name="Mail" className="text-primary mx-auto mb-4" size={40} />
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-gray-600">info@sevastopol-water.ru</p>
                <p className="text-gray-600">Ответим в течение часа</p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <Icon name="MapPin" className="text-primary mx-auto mb-4" size={40} />
                <h3 className="font-semibold mb-2">Адрес</h3>
                <p className="text-gray-600">г. Севастополь</p>
                <p className="text-gray-600">ул. Производственная, 15</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Droplets" className="text-primary" size={24} />
              <span className="text-xl font-bold">Источник Севастополя</span>
            </div>
            <p className="text-gray-400">
              © 2024 Источник Севастополя. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}