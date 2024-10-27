import React from 'react';

// Define the type for the props
interface CourseCardProps {
  title: string;
  author: string;
  duration: string;
  rating: number;  // assuming rating is a number (e.g. 4.9)
}

// CourseCard functional component
const CourseCard: React.FC<CourseCardProps> = ({ title, author, duration, rating }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
      {/* Icon or Image Placeholder */}
      <img src="https://via.placeholder.com/40" alt="course-icon" className="w-10 h-10" />
      
      {/* Course Details */}
      <div>
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-gray-500">{author}</p>
        <p className="text-gray-400">{duration}</p>
      </div>

      {/* Rating */}
      <div className="ml-auto text-yellow-400">
        <span>{rating.toFixed(1)}</span> {/* Ensure rating is displayed to 1 decimal point */}
      </div>
    </div>
  );
};

// Example of how to use CourseCard in a parent component
const Courses = () => {
  // Example data
  const courseData = [
    { title: 'Learn Figma', author: 'Christopher Morgan', duration: '6h 30min', rating: 4.9 },
    { title: 'Analog Photography', author: 'Gordon Norman', duration: '3h 15min', rating: 4.7 },
    { title: 'Master Instagram', author: 'Sophie Gill', duration: '7h 40min', rating: 4.6 },
    { title: 'Basics of Drawing', author: 'Jean Tate', duration: '11h 30min', rating: 4.8 },
    { title: 'Photoshop - Essence', author: 'David Green', duration: '5h 35min', rating: 4.7 },
  ];

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Courses</h2>
      <div className="grid gap-6">
        {courseData.map((course, index) => (
          <CourseCard
            key={index}
            title={course.title}
            author={course.author}
            duration={course.duration}
            rating={course.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
