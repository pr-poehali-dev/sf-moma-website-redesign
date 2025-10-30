import { Link } from 'wouter';
import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const artists = [
  {
    id: 1,
    name: 'Яёй Кусама',
    genre: 'Инсталляция',
    country: 'Япония',
    image: 'https://cdn.poehali.dev/projects/11680e18-f76e-43d7-acb0-2e2c79865cf0/files/7b790f9c-e10c-4a62-8103-498d4eedbd0e.jpg',
    bio: 'Известна зеркальными комнатами бесконечности и мотивами в горошек. Кусама пионер современного искусства на протяжении шести десятилетий.',
    works: 45,
    exhibitions: 3
  },
  {
    id: 2,
    name: 'Аниш Капур',
    genre: 'Скульптура',
    country: 'Великобритания',
    image: 'https://cdn.poehali.dev/projects/11680e18-f76e-43d7-acb0-2e2c79865cf0/files/abcf99c3-e618-42e6-ad56-034679ec856f.jpg',
    bio: 'Британско-индийский скульптор, известный масштабными публичными скульптурами и инновационным использованием материалов.',
    works: 32,
    exhibitions: 2
  },
  {
    id: 3,
    name: 'Ай Вэйвэй',
    genre: 'Смешанная техника',
    country: 'Китай',
    image: 'https://cdn.poehali.dev/projects/11680e18-f76e-43d7-acb0-2e2c79865cf0/files/291975c0-9d47-4eb1-9fc8-aea1d61a508a.jpg',
    bio: 'Современный художник и активист, чьи работы исследуют права человека, свободу слова и культурную идентичность.',
    works: 58,
    exhibitions: 4
  },
  {
    id: 4,
    name: 'Марина Абрамович',
    genre: 'Перформанс',
    country: 'Сербия',
    image: 'https://cdn.poehali.dev/projects/11680e18-f76e-43d7-acb0-2e2c79865cf0/files/7b790f9c-e10c-4a62-8103-498d4eedbd0e.jpg',
    bio: 'Пионер перформанс-арта, исследующая взаимосвязь между исполнителем и зрителем через продолжительные работы.',
    works: 28,
    exhibitions: 2
  },
  {
    id: 5,
    name: 'Олафур Элиассон',
    genre: 'Инсталляция',
    country: 'Дания',
    image: 'https://cdn.poehali.dev/projects/11680e18-f76e-43d7-acb0-2e2c79865cf0/files/abcf99c3-e618-42e6-ad56-034679ec856f.jpg',
    bio: 'Создаёт масштабные инсталляции с использованием света, воды и воздуха, исследуя восприятие и экологическое сознание.',
    works: 41,
    exhibitions: 3
  },
  {
    id: 6,
    name: 'Кара Уокер',
    genre: 'Смешанная техника',
    country: 'США',
    image: 'https://cdn.poehali.dev/projects/11680e18-f76e-43d7-acb0-2e2c79865cf0/files/291975c0-9d47-4eb1-9fc8-aea1d61a508a.jpg',
    bio: 'Известна комнатными табло из вырезанных бумажных силуэтов, исследующих расу, гендер и идентичность в американской истории.',
    works: 36,
    exhibitions: 2
  }
];

const genres = ['Все', 'Инсталляция', 'Скульптура', 'Смешанная техника', 'Перформанс'];

const Artists = () => {
  const [selectedGenre, setSelectedGenre] = useState('Все');
  const [selectedArtist, setSelectedArtist] = useState<number | null>(null);

  const filteredArtists = selectedGenre === 'Все' 
    ? artists 
    : artists.filter(artist => artist.genre === selectedGenre);

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
              <a className="text-sm font-medium text-accent">Художники</a>
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
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6">Избранные художники</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Познакомьтесь с визионерами, формирующими современное искусство
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
            {genres.map(genre => (
              <Button
                key={genre}
                variant={selectedGenre === genre ? 'default' : 'outline'}
                onClick={() => setSelectedGenre(genre)}
                className="rounded-full"
              >
                {genre}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-slide-up">
            {filteredArtists.map((artist, index) => (
              <div
                key={artist.id}
                className="group relative overflow-hidden rounded-2xl bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedArtist(artist.id)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="secondary" className="mb-3">
                    {artist.genre}
                  </Badge>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {artist.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {artist.country}
                  </p>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <span className="font-semibold">{artist.works}</span>
                      <span className="text-muted-foreground ml-1">works</span>
                    </div>
                    <div>
                      <span className="font-semibold">{artist.exhibitions}</span>
                      <span className="text-muted-foreground ml-1">exhibitions</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedArtist && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedArtist(null)}
        >
          <div
            className="bg-background rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {artists.find(a => a.id === selectedArtist) && (
              <div>
                <div className="aspect-[21/9] overflow-hidden rounded-t-3xl">
                  <img
                    src={artists.find(a => a.id === selectedArtist)!.image}
                    alt={artists.find(a => a.id === selectedArtist)!.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <Badge variant="secondary" className="mb-3">
                        {artists.find(a => a.id === selectedArtist)!.genre}
                      </Badge>
                      <h2 className="text-4xl md:text-5xl font-bold mb-2">
                        {artists.find(a => a.id === selectedArtist)!.name}
                      </h2>
                      <p className="text-xl text-muted-foreground">
                        {artists.find(a => a.id === selectedArtist)!.country}
                      </p>
                    </div>
                    <button
                      onClick={() => setSelectedArtist(null)}
                      className="hover:bg-secondary p-2 rounded-full transition-colors"
                    >
                      <Icon name="X" size={24} />
                    </button>
                  </div>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {artists.find(a => a.id === selectedArtist)!.bio}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-secondary p-6 rounded-xl">
                      <div className="text-3xl font-bold text-accent mb-2">
                        {artists.find(a => a.id === selectedArtist)!.works}
                      </div>
                      <div className="text-sm text-muted-foreground">Работ в коллекции</div>
                    </div>
                    <div className="bg-secondary p-6 rounded-xl">
                      <div className="text-3xl font-bold text-accent mb-2">
                        {artists.find(a => a.id === selectedArtist)!.exhibitions}
                      </div>
                      <div className="text-sm text-muted-foreground">Текущих выставок</div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button size="lg" className="flex-1">
                      Смотреть работы <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      <footer className="bg-black text-white py-16 px-6 mt-20">
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
                <li><Link href="/"><a className="hover:text-white transition-colors">Выставки</a></Link></li>
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

export default Artists;