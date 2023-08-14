import React from 'react';

export const Engineers = () => {
  const imageUrl = 'https://media.istockphoto.com/id/1303206644/sv/foto/portr%C3%A4tt-av-leende-kaukasisk-man-poserar-i-kontoret.jpg?s=612x612&w=is&k=20&c=JsOCCoiVH4TcpF5QBWm2xiC2bOgmeK87Pm4XOXnOdQ8=';

  const engineers = [
      { name: 'Abdulahi', age: 10, imageUrl, fav_lang: 'python', role: 'Software Engineer' },
      { name: 'Ahmed', age: 30, imageUrl, fav_lang: 'Java', role: 'Senior Developer' },
      { name: 'Abdi', age: 28, imageUrl, fav_lang: 'JavaScript', role: 'Frontend Engineer' },
      { name: 'Muuse', age: 25, imageUrl, fav_lang: 'C++', role: 'Systems Engineer' },
      { name: 'Carays', age: 26, imageUrl, fav_lang: 'Ruby', role: 'Full Stack Developer' },
      { name: 'Cabdi', age: 27, imageUrl, fav_lang: 'Go', role: 'DevOps Engineer' },
      { name: 'Cabdi', age: 28, imageUrl, fav_lang: 'Swift', role: 'iOS Developer' },
      { name: 'Cabdi', age: 29, imageUrl, fav_lang: 'PHP', role: 'Backend Developer' },
      { name: 'Cabdi', age: 30, imageUrl, fav_lang: 'TypeScript', role: 'UI/UX Designer' },
      { name: 'Cabdi', age: 31, imageUrl, fav_lang: 'Kotlin', role: 'Mobile App Developer' },
      { name: 'Cabdi', age: 32, imageUrl, fav_lang: 'Rust', role: 'Embedded Systems Engineer' },
      { name: 'Cabdi', age: 33, imageUrl, fav_lang: 'Scala', role: 'Data Scientist' },
      { name: 'Cabdi', age: 34, imageUrl, fav_lang: 'Haskell', role: 'Functional Programmer' },
      { name: 'Cabdi', age: 35, imageUrl, fav_lang: 'Python', role: 'AI Engineer' },
      { name: 'Cabdi', age: 36, imageUrl, fav_lang: 'Java', role: 'Back-End Engineer' },
      { name: 'Cabdi', age: 37, imageUrl, fav_lang: 'JavaScript', role: 'Front-End Developer' },
      { name: 'Cabdi', age: 38, imageUrl, fav_lang: 'C#', role: 'Game Developer' },
      { name: 'Cabdi', age: 39, imageUrl, fav_lang: 'Ruby', role: 'Web Developer' },
      { name: 'Cabdi', age: 40, imageUrl, fav_lang: 'Go', role: 'Cloud Engineer' },
      { name: 'Cabdi', age: 41, imageUrl, fav_lang: 'Swift', role: 'Mobile Developer' },
      { name: 'Cabdi', age: 42, imageUrl, fav_lang: 'PHP', role: 'Full Stack Engineer' },
      { name: 'Cabdi', age: 43, imageUrl, fav_lang: 'TypeScript', role: 'UI Designer' },
      { name: 'Cabdi', age: 44, imageUrl, fav_lang: 'Kotlin', role: 'Android Developer' },
  ];

  return (
    <div className="flex flex-wrap -mx-4">
      {engineers.map((engineer, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 xl:w-1/3 p-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <img
              src={engineer.imageUrl}
              alt={`${engineer.name}'s Image`}
              className="mt-4 rounded-full w-20 h-20 mx-auto"
            />
            <h1 className="text-xl font-semibold mb-2">{engineer.name}</h1>
            <p>{engineer.age}</p>
            <p>{engineer.role}</p>
            <p>{engineer.fav_lang}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
