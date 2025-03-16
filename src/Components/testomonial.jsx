import React from "react";

const Testimonial = () => {
  const testimonials = [
    {
      quote:
        "The faculty here genuinely care about student success. They've pushed me to achieve things I never thought possible.",
      name: "Sophia Johnson",
      role: "Current Student, Class of 2023",
      avatar: "https://plus.unsplash.com/premium_photo-1667511127370-c9843772312f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhcmRlZCUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      quote:
        "The hands-on learning experiences and research opportunities prepared me exceptionally well for my career in engineering.",
      name: "Marcus Chen",
      role: "Alumni, Class of 2020",
      avatar: "https://static2.bigstockphoto.com/7/3/6/large1500/6375071.jpg",
    },
    {
      quote:
        "Teaching here has been the highlight of my career. The collaborative environment allows both students and faculty to thrive.",
      name: "Dr. Emily Rodriguez",
      role: "Professor of Biology",
      avatar: "https://media.gettyimages.com/id/1289461335/photo/portrait-of-a-handsome-black-man.jpg?s=612x612&w=gi&k=20&c=tLXHz94Tj89nEyeEm4qZuEJdR24qLDO_Xpq-SSQzGuw=",
    },
  ];

  return (
    <div className="bg-blue-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-2">
          Voices from Our Community
        </h1>
        <p className="text-white text-center mb-12 max-w-3xl mx-auto">
          Hear what our students, alumni, and faculty have to say about their
          experiences at our institution.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-800/50 p-6 rounded-lg">
              <div className="text-3xl text-white mb-4">❝</div>
              <p className="text-white mb-4">"{testimonial.quote}"</p>

              <div className="flex items-center mt-8">
                <div className="mr-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold">
                    {testimonial.name}
                  </h3>
                  <p className="text-white/80">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
