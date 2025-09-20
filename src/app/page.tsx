import Image from "next/image";

export default function Home() {
  return (
    <section className="text-center">
      <h2 className="text-4xl font-extrabold mb-4 text-red-600">Welcome to Fast Food Express</h2>
      <p className="mb-8 text-gray-700 text-lg">
        Enjoy hot pizzas, juicy burgers, and refreshing drinks – made with love!
      </p>

      {/* Food Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Pizza Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-4">
          <Image
            src="/pizza.jpg"
            alt="Pizza"
            width={300}
            height={200}
            className="rounded-xl mx-auto"
          />
          <h3 className="text-xl font-bold mt-4 text-red-500">Delicious Pizza</h3>
          <p className="text-gray-600">Cheesy, hot & fresh from the oven.</p>
        </div>

        {/* Burger Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-4">
          <Image
            src="/burger.jpg"
            alt="Burger"
            width={300}
            height={200}
            className="rounded-xl mx-auto"
          />
          <h3 className="text-xl font-bold mt-4 text-red-500">Juicy Burgers</h3>
          <p className="text-gray-600">Grilled to perfection with fresh toppings.</p>
        </div>

        {/* Drinks Card */}
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition p-4">
          <Image
            src="/drinks.jpg"
            alt="Drinks"
            width={300}
            height={200}
            className="rounded-xl mx-auto"
          />
          <h3 className="text-xl font-bold mt-4 text-red-500">Cool Drinks</h3>
          <p className="text-gray-600">Refreshing beverages to complement your meal.</p>
        </div>
      </div>
    </section>
  );
}
