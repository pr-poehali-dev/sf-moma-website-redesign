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
              <a className="text-sm font-medium hover:text-accent transition-colors">Exhibitions</a>
            </Link>
            <Link href="/artists">
              <a className="text-sm font-medium hover:text-accent transition-colors">Artists</a>
            </Link>
            <a href="#visit" className="text-sm font-medium hover:text-accent transition-colors">Visit</a>
            <a href="#about" className="text-sm font-medium hover:text-accent transition-colors">About</a>
          </div>
          <Button variant="default" size="sm" className="hidden md:flex">
            Get Tickets
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
              Where Art
              <br />
              <span className="text-accent">Meets Future</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12">
              Experience the most innovative contemporary art collection in San Francisco
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="text-lg px-8">
                Explore Collection
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Plan Your Visit
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
                  <span className="text-sm uppercase tracking-wider opacity-80">Featured Exhibition</span>
                  <h3 className="text-3xl font-bold mt-2">Abstract Futures</h3>
                  <p className="mt-2 opacity-90">Opening November 2024</p>
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
                  <h4 className="text-xl font-bold">Sculpture Garden</h4>
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
                  <h4 className="text-xl font-bold">Digital Gallery</h4>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 group relative overflow-hidden rounded-2xl bg-accent p-8 flex flex-col justify-between aspect-square md:aspect-auto hover:shadow-2xl transition-shadow duration-500">
              <div>
                <Icon name="Calendar" size={40} className="text-white mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Current Exhibitions</h4>
                <p className="text-white/90">Discover 12+ active exhibitions featuring works from emerging and established artists</p>
              </div>
              <Button variant="secondary" className="mt-6 w-fit">
                View All <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>

            <div className="md:col-span-3 group relative overflow-hidden rounded-2xl bg-black p-8 flex flex-col justify-between aspect-square md:aspect-auto hover:shadow-2xl transition-shadow duration-500">
              <div>
                <Icon name="Users" size={40} className="text-white mb-4" />
                <h4 className="text-2xl font-bold text-white mb-2">Member Benefits</h4>
                <p className="text-white/90">Join our community and enjoy unlimited access to all exhibitions and events</p>
              </div>
              <Button variant="outline" className="mt-6 w-fit bg-white text-black hover:bg-white/90">
                Become a Member <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-secondary">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <span className="text-accent text-sm uppercase tracking-wider font-semibold">About SFMOMA</span>
              <h2 className="text-5xl font-bold mt-4 mb-6">A Living Museum for Modern Times</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Since 1935, SFMOMA has been a beacon for contemporary art in San Francisco. Our collection 
                spans photography, painting, sculpture, and new media, featuring works from groundbreaking 
                artists who shape our cultural landscape.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With over 33,000 works of art, seven floors of exhibition space, and a commitment to 
                accessibility and innovation, we invite you to explore art that challenges, inspires, 
                and transforms.
              </p>
              <Button size="lg">
                Learn More <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4 animate-slide-up">
              <div className="bg-white p-6 rounded-xl">
                <div className="text-4xl font-bold text-accent mb-2">33K+</div>
                <div className="text-sm text-muted-foreground">Artworks</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-4xl font-bold text-accent mb-2">7</div>
                <div className="text-sm text-muted-foreground">Floors</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-4xl font-bold text-accent mb-2">170K</div>
                <div className="text-sm text-muted-foreground">sqft Space</div>
              </div>
              <div className="bg-white p-6 rounded-xl">
                <div className="text-4xl font-bold text-accent mb-2">1935</div>
                <div className="text-sm text-muted-foreground">Founded</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="visit" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">Plan Your Visit</h2>
            <p className="text-xl text-muted-foreground">We're open every day except Wednesday</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-secondary p-8 rounded-2xl animate-fade-in hover:shadow-xl transition-shadow">
              <Icon name="Clock" size={32} className="text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Hours</h3>
              <p className="text-muted-foreground mb-2">Thu–Mon: 10am–5pm</p>
              <p className="text-muted-foreground mb-2">Tue: 10am–9pm</p>
              <p className="text-muted-foreground">Wed: Closed</p>
            </div>
            <div className="bg-secondary p-8 rounded-2xl animate-fade-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.1s' }}>
              <Icon name="MapPin" size={32} className="text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Location</h3>
              <p className="text-muted-foreground mb-2">151 Third Street</p>
              <p className="text-muted-foreground mb-2">San Francisco, CA 94103</p>
              <a href="#" className="text-accent hover:underline">Get Directions →</a>
            </div>
            <div className="bg-secondary p-8 rounded-2xl animate-fade-in hover:shadow-xl transition-shadow" style={{ animationDelay: '0.2s' }}>
              <Icon name="Ticket" size={32} className="text-accent mb-4" />
              <h3 className="text-2xl font-bold mb-3">Admission</h3>
              <p className="text-muted-foreground mb-2">Adults: $25</p>
              <p className="text-muted-foreground mb-2">Seniors: $22</p>
              <p className="text-muted-foreground">Youth (18 & under): Free</p>
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
                San Francisco Museum of Modern Art
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Visit</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Hours & Admission</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Getting Here</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Group Visits</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Explore</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Exhibitions</a></li>
                <li><Link href="/artists"><a className="hover:text-white transition-colors">Artists</a></Link></li>
                <li><a href="#" className="hover:text-white transition-colors">Collection</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Membership</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Shop</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">© 2024 San Francisco Museum of Modern Art</p>
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
