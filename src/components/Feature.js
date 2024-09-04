const features = [
    {
        title: "Seamless Integration",
        description: "Integrate effortlessly with the tools you already use.",
        icon: "🔗",
    },
    {
        title: "Real-time Collaboration",
        description: "Work together in real-time with teams across the globe.",
        icon: "👥",
    },
    {
        title: "Secure & Reliable",
        description: "Your data is safe with our top-notch security measures.",
        icon: "🔒",
    },
];

const Feature = () => {
    return (
        <section className="bg-gray-900 items-center py-14 px-24">
            <div className="container text-center mx-auto">
                <h3 className="text-4xl font-semibold text-gray-900 mb-12">Our Features</h3>
                {/* The grid will have 1 column by default, add a gap between grid items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        /* Apply rounded corner */
                        <div key={index} className="p-16 rounded-lg shadow-lg bg-gray-700 animate-bounce-in">
                            <div className="text-6xl mb-4">{feature.icon}</div>
                            <h4 className="text-2xl font-semibold text-gray-800 mb-2">{feature.title}</h4>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Feature;
