import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const products = [
    {
      id: 1,
      name: 'External',
      price: 400,
      description: 'Безопасный внешний чит с базовыми функциями',
      features: ['Wallhack', 'Radar', 'Triggerbot', 'Recoil Control'],
      icon: 'Shield'
    },
    {
      id: 2,
      name: 'Internal',
      price: 400,
      description: 'Продвинутый внутренний чит с полным функционалом',
      features: ['Aimbot', 'ESP', 'Skinchanger', 'Bhop', 'No Flash'],
      icon: 'Zap'
    }
  ];

  const faqItems = [
    {
      question: 'Как установить чит?',
      answer: 'После покупки вы получите инструкцию по установке и настройке. Процесс занимает 2-3 минуты.'
    },
    {
      question: 'Есть ли риск бана?',
      answer: 'Мы используем современные методы защиты и регулярно обновляем читы. Однако 100% гарантии нет.'
    },
    {
      question: 'Как долго действует подписка?',
      answer: 'Подписка на месяц. Продление автоматическое, можно отменить в любой момент.'
    },
    {
      question: 'Поддерживаются ли обновления CS2?',
      answer: 'Да, мы обновляем читы в течение 2-6 часов после выхода патча.'
    }
  ];

  const renderNavigation = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Icon name="Target" className="text-primary" size={32} />
            <h1 className="text-2xl font-bold neon-text">MONDORINE</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button onClick={() => setActiveSection('home')} className="hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => setActiveSection('shop')} className="hover:text-primary transition-colors">
              Магазин
            </button>
            <button onClick={() => setActiveSection('faq')} className="hover:text-primary transition-colors">
              FAQ
            </button>
            <button onClick={() => setActiveSection('support')} className="hover:text-primary transition-colors">
              Поддержка
            </button>
          </div>

          <div className="flex items-center space-x-3">
            {isAuthenticated ? (
              <Button onClick={() => setActiveSection('profile')} variant="outline" className="neon-border">
                <Icon name="User" size={18} className="mr-2" />
                Профиль
              </Button>
            ) : (
              <Button onClick={() => setActiveSection('auth')} className="bg-primary text-primary-foreground neon-glow">
                Вход
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );

  const renderHero = () => (
    <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <Badge className="mb-4 text-lg px-4 py-2 bg-primary/20 text-primary border-primary pulse-glow">
            CS2 CHEATS
          </Badge>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">
            MONDORINE
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональные читы для Counter-Strike 2
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button onClick={() => setActiveSection('shop')} size="lg" className="bg-primary text-primary-foreground neon-glow text-lg px-8 py-6">
              <Icon name="ShoppingCart" size={20} className="mr-2" />
              Купить чит
            </Button>
            <Button onClick={() => setActiveSection('faq')} size="lg" variant="outline" className="neon-border text-lg px-8 py-6">
              <Icon name="HelpCircle" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );

  const renderShop = () => (
    <section className="min-h-screen py-24 pt-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 neon-text">Магазин</h2>
          <p className="text-xl text-muted-foreground">Выберите подходящий вариант</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product) => (
            <Card key={product.id} className="bg-card border-primary/30 neon-border hover:scale-105 transition-transform">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Icon name={product.icon as any} size={48} className="text-primary" />
                  <Badge className="text-2xl px-4 py-2 bg-primary text-primary-foreground neon-glow">
                    {product.price}₽
                  </Badge>
                </div>
                <CardTitle className="text-3xl">{product.name}</CardTitle>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon name="Check" size={18} className="text-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-primary text-primary-foreground neon-glow" size="lg">
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  Купить за {product.price}₽
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  const renderAuth = () => (
    <section className="min-h-screen flex items-center justify-center py-24 pt-32">
      <div className="container mx-auto px-4">
        <Card className="max-w-md mx-auto bg-card border-primary/30 neon-border">
          <CardHeader>
            <CardTitle className="text-3xl text-center neon-text">Вход / Регистрация</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Вход</TabsTrigger>
                <TabsTrigger value="register">Регистрация</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login" className="space-y-4">
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="your@email.com" className="bg-input border-primary/20" />
                </div>
                <div className="space-y-2">
                  <Label>Пароль</Label>
                  <Input type="password" placeholder="••••••••" className="bg-input border-primary/20" />
                </div>
                <Button onClick={() => setIsAuthenticated(true)} className="w-full bg-primary text-primary-foreground neon-glow">
                  Войти
                </Button>
              </TabsContent>
              
              <TabsContent value="register" className="space-y-4">
                <div className="space-y-2">
                  <Label>Имя пользователя</Label>
                  <Input placeholder="username" className="bg-input border-primary/20" />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input type="email" placeholder="your@email.com" className="bg-input border-primary/20" />
                </div>
                <div className="space-y-2">
                  <Label>Пароль</Label>
                  <Input type="password" placeholder="••••••••" className="bg-input border-primary/20" />
                </div>
                <Button onClick={() => setIsAuthenticated(true)} className="w-full bg-primary text-primary-foreground neon-glow">
                  Зарегистрироваться
                </Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </section>
  );

  const renderProfile = () => (
    <section className="min-h-screen py-24 pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="bg-card border-primary/30 neon-border mb-6">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center neon-glow">
                  <Icon name="User" size={40} className="text-primary" />
                </div>
                <div>
                  <CardTitle className="text-3xl">username</CardTitle>
                  <CardDescription>user@email.com</CardDescription>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-card border-primary/30 neon-border">
            <CardHeader>
              <CardTitle className="text-2xl">Активные подписки</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-primary/10 rounded-lg border border-primary/30">
                <div className="flex items-center space-x-3">
                  <Icon name="Shield" size={24} className="text-primary" />
                  <div>
                    <p className="font-semibold">External</p>
                    <p className="text-sm text-muted-foreground">Истекает: 30.12.2024</p>
                  </div>
                </div>
                <Badge className="bg-primary text-primary-foreground">Активна</Badge>
              </div>
              
              <Button variant="outline" className="w-full neon-border" onClick={() => setIsAuthenticated(false)}>
                <Icon name="LogOut" size={18} className="mr-2" />
                Выйти
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );

  const renderFAQ = () => (
    <section className="min-h-screen py-24 pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-12 neon-text">FAQ</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="bg-card border-primary/30 neon-border rounded-lg px-6">
                <AccordionTrigger className="text-lg hover:text-primary">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );

  const renderSupport = () => (
    <section className="min-h-screen py-24 pt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-primary/30 neon-border">
            <CardHeader>
              <CardTitle className="text-3xl text-center neon-text">Техническая поддержка</CardTitle>
              <CardDescription className="text-center">Мы ответим в течение 24 часов</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Email</Label>
                <Input type="email" placeholder="your@email.com" className="bg-input border-primary/20" />
              </div>
              <div className="space-y-2">
                <Label>Тема</Label>
                <Input placeholder="Опишите проблему кратко" className="bg-input border-primary/20" />
              </div>
              <div className="space-y-2">
                <Label>Сообщение</Label>
                <Textarea rows={6} placeholder="Подробное описание проблемы..." className="bg-input border-primary/20" />
              </div>
              <Button className="w-full bg-primary text-primary-foreground neon-glow">
                <Icon name="Send" size={18} className="mr-2" />
                Отправить
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {renderNavigation()}
      
      {activeSection === 'home' && renderHero()}
      {activeSection === 'shop' && renderShop()}
      {activeSection === 'auth' && renderAuth()}
      {activeSection === 'profile' && isAuthenticated && renderProfile()}
      {activeSection === 'faq' && renderFAQ()}
      {activeSection === 'support' && renderSupport()}
    </div>
  );
};

export default Index;
