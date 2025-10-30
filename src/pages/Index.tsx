import { Link } from 'wouter';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-bold tracking-tight hover:opacity-70 transition-opacity">
              SFMOMA
            </a>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/">
              <a className="text-sm font-medium hover:text-accent transition-colors">Выставки</a>
            </Link>
            <Link href="/artists">
              <a className="text-sm font-medium hover:text-accent transition-colors">Художники</a>
            </Link>
            <a href="#visit" className="text-sm font-medium hover:text-accent transition-colors">Посетить</a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">О музее</a>
          </div>
          <Button variant="default" size="sm" className="hidden md:flex">
            Купить билет
          </Button>
          <button className="md:hidden">
            <Icon name="Menu" size={24} />
          </button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6">
              Где искусство
              <br />
              <span className="text-accent">встречает будущее</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Самая инновационная коллекция современного искусства в Сан-Франциско
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg px-8">
                Смотреть коллекцию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Планировать визит
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-6 gap-4 max-w-7xl mx-auto animate-slide-up">
            <div className="md:col-span-4 md:row-span-2 group relative overflow-hidden rounded-2xl aspect-[4/3] md:aspect-auto">
              <img
                src="https://cdn.poehali.dev/projects/11680e18-f76e-43d7-acb0-2e2c79865cf0/files/7b790f9c-e10c-4a62-8103-498d4eedbd0e.jpg"
                alt="Featured Exhibition"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
                <div className="text-white">
                  <span className="text-sm uppercase tracking-wider opacity-80">Главная выставка</span>
                  <h3 className="text-3xl font-bold mt-2">Абстрактное будущее</h3>
                  <p className="mt-2 opacity-90">Открытие в ноябре 2024</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl aspect-square">
              <img
                src="https://cdn.poehali.dev/projects/11680e18-f76e-43d7-acb0-2e2c79865cf0/files/abcf99c3-e618-42e6-ad56-034679ec856f.jpg"
                alt="Sculpture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h4 className="text-xl font-bold">Сад скульптур</h4>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 group relative overflow-hidden rounded-2xl aspect-square">
              <img
                src="https://cdn.poehali.dev/projects/11680e18-f76e-43d7-acb0-2e2c79865cf0/files/291975c0-9d47-4eb1-9fc8-aea1d61a508a.jpg"
                alt="Digital Art"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h4 className="text-xl font-bold">Цифровая галерея</h4>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 group relative overflow-hidden rounded-2xl bg-accent p-8 flex flex-col justify-between aspect-square md:aspect-auto hover:shadow-2xl transition-shadow duration-500">
              <div>
                <Icon name="Calendar" size={40} className="text-white mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Текущие выставки</h4>
                <p className="text-white/90">Откройте для себя более 12 активных выставок с работами начинающих и признанных художников</p>
              </div>
              <Button variant="secondary" className="mt-6 w-fit">
                Смотреть все <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>

            <div className="md:col-span-3 group relative overflow-hidden rounded-2xl bg-black p-8 flex flex-col justify-between aspect-square md:aspect-auto hover:shadow-2xl transition-shadow duration-500">
              <div>
                <Icon name="Users" size={40} className="text-white mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Преимущества членства</h4>
                <p className="text-white/90">Присоединяйтесь к нашему сообществу и получите безлимитный доступ ко всем выставкам и мероприятиям</p>
              </div>
              <Button variant="outline" className="mt-6 w-fit bg-white text-black hover:bg-white/90">
                Стать членом <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <span className="text-accent text-sm uppercase tracking-wider font-semibold">О SFMOMA</span>
              <h2 className="text-5xl font-bold mt-4 mb-6">Живой музей современности</h2>
              <p className="text-lg text-muted-foreground mb-6">
                С 1935 года SFMOMA является маяком современного искусства в Сан-Франциско. Наша коллекция 
                включает фотографию, живопись, скульптуру и новые медиа с работами новаторских 
                художников, формирующих наш культурный ландшафт.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Более 33 000 произведений искусства, семь этажей выставочного пространства и стремление к 
                доступности и инновациям — мы приглашаем вас исследовать искусство, которое вызывает, вдохновляет 
                и трансформирует.
              </p>
              <Button size="lg">
                Узнать больше <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-slide-up">
              <div className="bg-white p-6 rounded-xl">
                <div className="text-4xl font-bold text-accent mb-2">33K+</div>
                <div className="text-sm text-muted-foreground">Произведений</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-4xl font-bold text-accent mb-2">7</div>
                <div className="text-sm text-muted-foreground">Этажей</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-4xl font-bold text-accent mb-2">170K</div>
                <div className="text-sm text-muted-foreground">кв.м площади</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-4xl font-bold text-accent mb-2">1935</div>
                <div className="text-sm text-muted-foreground">Год основания</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="visit" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Планируйте визит</h2>
            <p className="text-xl text-muted-foreground">Открыты каждый день, кроме среды</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary p-8 rounded-2xl animate-fade-in hover:shadow-xl transition-shadow">
              <Icon name="Clock" size={32} className="text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Время работы</h3>
              <p className="text-muted-foreground mb-2">Чт–Пн: 10:00–17:00</p>
              <p className="text-muted-foreground mb-2">Вт: 10:00–21:00</p>
              <p className="text-muted-foreground">Ср: Закрыто</p>
            </div>
            <div className="bg-secondary p-8 rounded-2xl animate-fade-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.1s' }}>
              <Icon name="MapPin" size={32} className="text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Адрес</h3>
              <p className="text-muted-foreground mb-2">151 Third Street</p>
              <p className="text-muted-foreground mb-2">Сан-Франциско, CA 94103</p>
              <a href="#" className="text-accent hover:underline">Как добраться →</a>
            </div>
            <div className="bg-secondary p-8 rounded-2xl animate-fade-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.2s' }}>
              <Icon name="Ticket" size={32} className="text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Входной билет</h3>
              <p className="text-muted-foreground mb-2">Взрослые: $25</p>
              <p className="text-muted-foreground mb-2">Пенсионеры: $22</p>
              <p className="text-muted-foreground">Молодёжь (до 18): Бесплатно</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">SFMOMA</h3>
              <p className="text-white/70 text-sm">
                Музей современного искусства Сан-Франциско
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Посещение</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Время и билеты</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Как добраться</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доступность</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Групповые визиты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Исследуйте</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Выставки</a></li>
                <li><Link href="/artists"><a className="hover:text-white transition-colors">Художники</a></Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Коллекция</a></li>
                <li><a href="#" className="hover:text-white transition-colors">События</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Связаться</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Членство</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Рассылка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Магазин</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поддержать</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">© 2024 Музей современного искусства Сан-Франциско</p>
            <div className="flex gap-6">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;