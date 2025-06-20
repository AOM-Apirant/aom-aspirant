'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import Link from 'next/link';
import { allQuizzes } from '@/assets/data';

// const allQuizzes = {
//   // General Knowledge Category - Multiple separate quizzes
//   'general-knowledge': {
//     title: 'General Knowledge',
//     description: 'Test your general knowledge with various topics',
//     icon: '🧠',
//     color: 'from-blue-500 to-blue-600',
//     quizzes: {
//       '1': [
//         {
//           question: 'What is the capital of India?',
//           options: ['Mumbai', 'Delhi', 'Kolkata', 'Chennai'],
//           correct: 1,
//           explanation: 'Delhi is the capital of India. It has been the capital since 1911 when the British moved it from Kolkata.'
//         },
//         {
//           question: 'Which planet is known as the Red Planet?',
//           options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
//           correct: 1,
//           explanation: 'Mars is known as the Red Planet due to its reddish appearance, which is caused by iron oxide (rust) on its surface.'
//         },
//         {
//           question: 'What is the largest ocean on Earth?',
//           options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
//           correct: 3,
//           explanation: 'The Pacific Ocean is the largest and deepest ocean on Earth, covering about 30% of the Earth&apos;s surface.'
//         },
//         {
//           question: 'Who wrote "Romeo and Juliet"?',
//           options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
//           correct: 1,
//           explanation: 'William Shakespeare wrote the famous tragedy "Romeo and Juliet" in the late 16th century.'
//         },
//         {
//           question: 'What is the chemical symbol for gold?',
//           options: ['Ag', 'Au', 'Fe', 'Cu'],
//           correct: 1,
//           explanation: 'Au is the chemical symbol for gold, derived from the Latin word "aurum."'
//         }
//       ],
//       '2': [
//         {
//           question: 'Which country is home to the kangaroo?',
//           options: ['New Zealand', 'Australia', 'South Africa', 'Brazil'],
//           correct: 1,
//           explanation: 'Kangaroos are native to Australia and are one of the country\'s most iconic animals.'
//         },
//         {
//           question: 'What is the largest desert in the world?',
//           options: ['Sahara Desert', 'Arabian Desert', 'Gobi Desert', 'Antarctic Desert'],
//           correct: 0,
//           explanation: 'The Sahara Desert in Africa is the largest hot desert in the world, covering approximately 9.2 million square kilometers.'
//         },
//         {
//           question: 'Which programming language is known as the "language of the web"?',
//           options: ['Python', 'Java', 'JavaScript', 'C++'],
//           correct: 2,
//           explanation: 'JavaScript is often called the "language of the web" because it is the primary language used for client-side web development.'
//         },
//         {
//           question: 'What does HTML stand for?',
//           options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlink and Text Markup Language'],
//           correct: 0,
//           explanation: 'HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.'
//         },
//         {
//           question: 'Who painted the Mona Lisa?',
//           options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
//           correct: 1,
//           explanation: 'Leonardo da Vinci painted the Mona Lisa, one of the most famous paintings in the world.'
//         }
//       ],
//       '3': [
//         {
//           question: 'What is the longest river in the world?',
//           options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'],
//           correct: 1,
//           explanation: 'The Nile River in Africa is considered the longest river in the world, flowing approximately 6,650 kilometers.'
//         },
//         {
//           question: 'Which mountain range runs through South America?',
//           options: ['Rocky Mountains', 'Himalayas', 'Andes', 'Alps'],
//           correct: 2,
//           explanation: 'The Andes mountain range runs along the western coast of South America and is the longest continental mountain range in the world.'
//         },
//         {
//           question: 'What is the capital of Japan?',
//           options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
//           correct: 2,
//           explanation: 'Tokyo is the capital and largest city of Japan, serving as the country\'s political and economic center.'
//         },
//         {
//           question: 'Which ocean is the smallest?',
//           options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
//           correct: 3,
//           explanation: 'The Arctic Ocean is the smallest and shallowest of the world\'s five major oceans.'
//         },
//         {
//           question: 'What is the hardest natural substance on Earth?',
//           options: ['Steel', 'Diamond', 'Granite', 'Iron'],
//           correct: 1,
//           explanation: 'Diamond is the hardest natural substance on Earth, scoring 10 on the Mohs scale of mineral hardness.'
//         }
//       ],
//       '4': [
//         {
//           question: 'What is the atomic number of carbon?',
//           options: ['4', '6', '8', '12'],
//           correct: 1,
//           explanation: 'Carbon has an atomic number of 6, meaning it has 6 protons in its nucleus.'
//         },
//         {
//           question: 'What is the most abundant gas in Earth\'s atmosphere?',
//           options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
//           correct: 2,
//           explanation: 'Nitrogen is the most abundant gas in Earth\'s atmosphere, making up about 78% of the air we breathe.'
//         },
//         {
//           question: 'What is the pH of pure water?',
//           options: ['5', '6', '7', '8'],
//           correct: 2,
//           explanation: 'Pure water has a neutral pH of 7, which is neither acidic nor basic.'
//         },
//         {
//           question: 'Which element is essential for life and makes up about 65% of the human body?',
//           options: ['Carbon', 'Oxygen', 'Hydrogen', 'Nitrogen'],
//           correct: 1,
//           explanation: 'Oxygen is essential for life and makes up about 65% of the human body by mass.'
//         },
//         {
//           question: 'What is the main theme of "To Kill a Mockingbird"?',
//           options: ['Love and romance', 'Racial injustice', 'War and peace', 'Coming of age'],
//           correct: 1,
//           explanation: 'The main theme of "To Kill a Mockingbird" is racial injustice and the moral growth of the protagonist.'
//         }
//       ],
//       '5': [
//         {
//           question: 'Which author wrote "Pride and Prejudice"?',
//           options: ['Emily Brontë', 'Charlotte Brontë', 'Jane Austen', 'Mary Shelley'],
//           correct: 2,
//           explanation: 'Jane Austen wrote "Pride and Prejudice," one of the most beloved novels in English literature.'
//         },
//         {
//           question: 'What is the setting of "The Great Gatsby"?',
//           options: ['1920s America', 'Victorian England', 'Ancient Rome', 'Modern Japan'],
//           correct: 0,
//           explanation: '"The Great Gatsby" is set in 1920s America, specifically in New York during the Jazz Age.'
//         },
//         {
//           question: 'Who is the author of "1984"?',
//           options: ['Aldous Huxley', 'George Orwell', 'Ray Bradbury', 'H.G. Wells'],
//           correct: 1,
//           explanation: 'George Orwell wrote "1984," a dystopian novel about totalitarian surveillance and control.'
//         },
//         {
//           question: 'What type of poem is a sonnet?',
//           options: ['A 14-line poem', 'A 10-line poem', 'A 20-line poem', 'A free verse poem'],
//           correct: 0,
//           explanation: 'A sonnet is a 14-line poem that typically follows a specific rhyme scheme and meter.'
//         },
//         {
//           question: 'Which CSS property is used to change the text color?',
//           options: ['text-color', 'color', 'font-color', 'text-style'],
//           correct: 1,
//           explanation: 'The "color" property in CSS is used to set the color of text elements.'
//         }
//       ]
//     }
//   },

//   // Geography Category - Multiple separate quizzes
//   'geography': {
//     title: 'Geography',
//     description: 'Explore world geography with various topics',
//     icon: '🌍',
//     color: 'from-green-500 to-green-600',
//     quizzes: {
//       '1': [
//         {
//           question: 'What is the capital of France?',
//           options: ['London', 'Berlin', 'Paris', 'Madrid'],
//           correct: 2,
//           explanation: 'Paris is the capital and largest city of France, known as the "City of Light."'
//         },
//         {
//           question: 'Which is the largest country in South America?',
//           options: ['Argentina', 'Brazil', 'Colombia', 'Peru'],
//           correct: 1,
//           explanation: 'Brazil is the largest country in South America, covering over 8.5 million square kilometers.'
//         },
//         {
//           question: 'What is the highest mountain in the world?',
//           options: ['K2', 'Mount Everest', 'Kangchenjunga', 'Lhotse'],
//           correct: 1,
//           explanation: 'Mount Everest is the highest mountain in the world, standing at 8,848 meters above sea level.'
//         },
//         {
//           question: 'Which continent is the largest?',
//           options: ['North America', 'South America', 'Europe', 'Asia'],
//           correct: 3,
//           explanation: 'Asia is the largest continent, covering about 30% of Earth\'s land area.'
//         },
//         {
//           question: 'What is the capital of Australia?',
//           options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
//           correct: 2,
//           explanation: 'Canberra is the capital of Australia, while Sydney and Melbourne are larger cities.'
//         }
//       ],
//       '2': [
//         {
//           question: 'Which river flows through London?',
//           options: ['Thames', 'Seine', 'Rhine', 'Danube'],
//           correct: 0,
//           explanation: 'The River Thames flows through London and is the longest river entirely in England.'
//         },
//         {
//           question: 'What is the largest island in the world?',
//           options: ['Greenland', 'New Guinea', 'Borneo', 'Madagascar'],
//           correct: 0,
//           explanation: 'Greenland is the largest island in the world, covering about 2.1 million square kilometers.'
//         },
//         {
//           question: 'Which country has the most time zones?',
//           options: ['Russia', 'United States', 'France', 'Australia'],
//           correct: 2,
//           explanation: 'France has the most time zones (12) due to its overseas territories around the world.'
//         },
//         {
//           question: 'What is the capital of Egypt?',
//           options: ['Alexandria', 'Cairo', 'Giza', 'Luxor'],
//           correct: 1,
//           explanation: 'Cairo is the capital and largest city of Egypt, located near the Nile Delta.'
//         },
//         {
//           question: 'Which desert is located in China?',
//           options: ['Sahara', 'Gobi', 'Arabian', 'Kalahari'],
//           correct: 1,
//           explanation: 'The Gobi Desert is located in northern China and southern Mongolia.'
//         }
//       ],
//       '3': [
//         {
//           question: 'What is the capital of Canada?',
//           options: ['Toronto', 'Vancouver', 'Ottawa', 'Montreal'],
//           correct: 2,
//           explanation: 'Ottawa is the capital of Canada, while Toronto is the largest city.'
//         },
//         {
//           question: 'Which is the smallest country in the world?',
//           options: ['Monaco', 'San Marino', 'Vatican City', 'Liechtenstein'],
//           correct: 2,
//           explanation: 'Vatican City is the smallest country in the world, covering just 0.44 square kilometers.'
//         },
//         {
//           question: 'What is the longest mountain range in the world?',
//           options: ['Rocky Mountains', 'Andes', 'Himalayas', 'Alps'],
//           correct: 1,
//           explanation: 'The Andes is the longest mountain range in the world, stretching over 7,000 kilometers.'
//         },
//         {
//           question: 'Which ocean surrounds Antarctica?',
//           options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Southern Ocean'],
//           correct: 3,
//           explanation: 'The Southern Ocean surrounds Antarctica and is the newest recognized ocean.'
//         },
//         {
//           question: 'What is the capital of South Africa?',
//           options: ['Johannesburg', 'Cape Town', 'Pretoria', 'Durban'],
//           correct: 2,
//           explanation: 'Pretoria is the administrative capital of South Africa, while Cape Town is the legislative capital.'
//         }
//       ],
//       '4': [
//         {
//           question: 'Which country is known as the Land of Fire and Ice?',
//           options: ['Norway', 'Iceland', 'Finland', 'Sweden'],
//           correct: 1,
//           explanation: 'Iceland is known as the Land of Fire and Ice due to its volcanoes and glaciers.'
//         },
//         {
//           question: 'What is the largest lake in Africa?',
//           options: ['Lake Victoria', 'Lake Tanganyika', 'Lake Malawi', 'Lake Chad'],
//           correct: 0,
//           explanation: 'Lake Victoria is the largest lake in Africa and the second-largest freshwater lake in the world.'
//         },
//         {
//           question: 'Which city is known as the Big Apple?',
//           options: ['Los Angeles', 'Chicago', 'New York', 'Boston'],
//           correct: 2,
//           explanation: 'New York City is known as the Big Apple, a nickname that became popular in the 1920s.'
//         },
//         {
//           question: 'What is the capital of Brazil?',
//           options: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador'],
//           correct: 2,
//           explanation: 'Brasília is the capital of Brazil, a planned city built in the 1960s.'
//         },
//         {
//           question: 'Which strait separates Asia from North America?',
//           options: ['Bering Strait', 'Strait of Gibraltar', 'Strait of Malacca', 'Strait of Hormuz'],
//           correct: 0,
//           explanation: 'The Bering Strait separates Asia from North America and connects the Pacific and Arctic oceans.'
//         }
//       ],
//       '5': [
//         {
//           question: 'What is the capital of New Zealand?',
//           options: ['Auckland', 'Wellington', 'Christchurch', 'Hamilton'],
//           correct: 1,
//           explanation: 'Wellington is the capital of New Zealand, while Auckland is the largest city.'
//         },
//         {
//           question: 'Which country has the most islands?',
//           options: ['Indonesia', 'Philippines', 'Sweden', 'Norway'],
//           correct: 2,
//           explanation: 'Sweden has the most islands in the world, with over 267,570 islands.'
//         },
//         {
//           question: 'What is the largest city in the world by population?',
//           options: ['Tokyo', 'Delhi', 'Shanghai', 'São Paulo'],
//           correct: 0,
//           explanation: 'Tokyo is the largest city in the world by population, with over 37 million people in its metropolitan area.'
//         },
//         {
//           question: 'Which river is known as the Yellow River?',
//           options: ['Yangtze', 'Yellow River', 'Mekong', 'Brahmaputra'],
//           correct: 1,
//           explanation: 'The Yellow River (Huang He) is known as the Yellow River due to the yellow silt it carries.'
//         },
//         {
//           question: 'What is the capital of Argentina?',
//           options: ['Buenos Aires', 'Córdoba', 'Rosario', 'Mendoza'],
//           correct: 0,
//           explanation: 'Buenos Aires is the capital and largest city of Argentina.'
//         }
//       ]
//     }
//   },

//   // Science Category - Multiple separate quizzes
//   'science': {
//     title: 'Science',
//     description: 'Discover scientific facts with various topics',
//     icon: '🔬',
//     color: 'from-red-500 to-red-600',
//     quizzes: {
//       '1': [
//         {
//           question: 'What is the chemical symbol for oxygen?',
//           options: ['O', 'Ox', 'O2', 'Oxy'],
//           correct: 0,
//           explanation: 'O is the chemical symbol for oxygen, and O2 represents the oxygen molecule.'
//         },
//         {
//           question: 'What is the hardest natural substance on Earth?',
//           options: ['Steel', 'Diamond', 'Granite', 'Iron'],
//           correct: 1,
//           explanation: 'Diamond is the hardest natural substance on Earth, scoring 10 on the Mohs scale of mineral hardness.'
//         },
//         {
//           question: 'What is the atomic number of hydrogen?',
//           options: ['0', '1', '2', '3'],
//           correct: 1,
//           explanation: 'Hydrogen has an atomic number of 1, meaning it has 1 proton in its nucleus.'
//         },
//         {
//           question: 'What is the most abundant element in the universe?',
//           options: ['Helium', 'Carbon', 'Oxygen', 'Hydrogen'],
//           correct: 3,
//           explanation: 'Hydrogen is the most abundant element in the universe, making up about 75% of all matter.'
//         },
//         {
//           question: 'What is the chemical formula for water?',
//           options: ['H2O', 'CO2', 'O2', 'N2'],
//           correct: 0,
//           explanation: 'H2O is the chemical formula for water, consisting of two hydrogen atoms and one oxygen atom.'
//         }
//       ],
//       '2': [
//         {
//           question: 'What is the speed of light?',
//           options: ['299,792 km/s', '199,792 km/s', '399,792 km/s', '499,792 km/s'],
//           correct: 0,
//           explanation: 'The speed of light in a vacuum is approximately 299,792 kilometers per second.'
//         },
//         {
//           question: 'What is the largest organ in the human body?',
//           options: ['Heart', 'Brain', 'Liver', 'Skin'],
//           correct: 3,
//           explanation: 'The skin is the largest organ in the human body, covering about 20 square feet in adults.'
//         },
//         {
//           question: 'What is the chemical symbol for gold?',
//           options: ['Ag', 'Au', 'Fe', 'Cu'],
//           correct: 1,
//           explanation: 'Au is the chemical symbol for gold, derived from the Latin word "aurum."'
//         },
//         {
//           question: 'What is the atomic number of carbon?',
//           options: ['4', '6', '8', '12'],
//           correct: 1,
//           explanation: 'Carbon has an atomic number of 6, meaning it has 6 protons in its nucleus.'
//         },
//         {
//           question: 'What is the pH of pure water?',
//           options: ['5', '6', '7', '8'],
//           correct: 2,
//           explanation: 'Pure water has a neutral pH of 7, which is neither acidic nor basic.'
//         }
//       ],
//       '3': [
//         {
//           question: 'What is the most abundant gas in Earth\'s atmosphere?',
//           options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
//           correct: 2,
//           explanation: 'Nitrogen is the most abundant gas in Earth\'s atmosphere, making up about 78% of the air we breathe.'
//         },
//         {
//           question: 'What is the chemical symbol for silver?',
//           options: ['Si', 'Ag', 'Sr', 'Au'],
//           correct: 1,
//           explanation: 'Ag is the chemical symbol for silver, derived from the Latin word "argentum."'
//         },
//         {
//           question: 'What is the atomic number of helium?',
//           options: ['1', '2', '3', '4'],
//           correct: 1,
//           explanation: 'Helium has an atomic number of 2, meaning it has 2 protons in its nucleus.'
//         },
//         {
//           question: 'What is the chemical formula for carbon dioxide?',
//           options: ['CO', 'CO2', 'C2O', 'C2O2'],
//           correct: 1,
//           explanation: 'CO2 is the chemical formula for carbon dioxide, consisting of one carbon atom and two oxygen atoms.'
//         },
//         {
//           question: 'What is the boiling point of water at sea level?',
//           options: ['90°C', '100°C', '110°C', '120°C'],
//           correct: 1,
//           explanation: 'Water boils at 100°C (212°F) at sea level under normal atmospheric pressure.'
//         }
//       ],
//       '4': [
//         {
//           question: 'What is the chemical symbol for iron?',
//           options: ['Ir', 'Fe', 'In', 'Fr'],
//           correct: 1,
//           explanation: 'Fe is the chemical symbol for iron, derived from the Latin word "ferrum."'
//         },
//         {
//           question: 'What is the atomic number of nitrogen?',
//           options: ['5', '6', '7', '8'],
//           correct: 2,
//           explanation: 'Nitrogen has an atomic number of 7, meaning it has 7 protons in its nucleus.'
//         },
//         {
//           question: 'What is the chemical formula for methane?',
//           options: ['CH3', 'CH4', 'C2H4', 'C2H6'],
//           correct: 1,
//           explanation: 'CH4 is the chemical formula for methane, consisting of one carbon atom and four hydrogen atoms.'
//         },
//         {
//           question: 'What is the freezing point of water?',
//           options: ['-10°C', '0°C', '10°C', '20°C'],
//           correct: 1,
//           explanation: 'Water freezes at 0°C (32°F) under normal atmospheric pressure.'
//         },
//         {
//           question: 'What is the chemical symbol for copper?',
//           options: ['Co', 'Cu', 'Cp', 'Cr'],
//           correct: 1,
//           explanation: 'Cu is the chemical symbol for copper, derived from the Latin word "cuprum."'
//         }
//       ],
//       '5': [
//         {
//           question: 'What is the atomic number of oxygen?',
//           options: ['6', '7', '8', '9'],
//           correct: 2,
//           explanation: 'Oxygen has an atomic number of 8, meaning it has 8 protons in its nucleus.'
//         },
//         {
//           question: 'What is the chemical formula for glucose?',
//           options: ['C6H12O6', 'C12H22O11', 'CH3COOH', 'NaHCO3'],
//           correct: 0,
//           explanation: 'C6H12O6 is the chemical formula for glucose, a simple sugar used by cells for energy.'
//         },
//         {
//           question: 'What is the chemical symbol for sodium?',
//           options: ['So', 'Na', 'Nd', 'No'],
//           correct: 1,
//           explanation: 'Na is the chemical symbol for sodium, derived from the Latin word "natrium."'
//         },
//         {
//           question: 'What is the atomic number of neon?',
//           options: ['8', '9', '10', '11'],
//           correct: 2,
//           explanation: 'Neon has an atomic number of 10, meaning it has 10 protons in its nucleus.'
//         },
//         {
//           question: 'What is the chemical formula for sulfuric acid?',
//           options: ['H2SO3', 'H2SO4', 'H3PO4', 'HNO3'],
//           correct: 1,
//           explanation: 'H2SO4 is the chemical formula for sulfuric acid, a strong acid commonly used in industry.'
//         }
//       ]
//     }
//   },

//   // Art & Culture Category - Multiple separate quizzes
//   'art-culture': {
//     title: 'Art & Culture',
//     description: 'Learn about famous artists and cultural works',
//     icon: '🎨',
//     color: 'from-pink-500 to-pink-600',
//     quizzes: {
//       '1': [
//         {
//           question: 'Who painted the Mona Lisa?',
//           options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
//           correct: 1,
//           explanation: 'Leonardo da Vinci painted the Mona Lisa, one of the most famous paintings in the world.'
//         },
//         {
//           question: 'What is the primary color that is not a primary color of light?',
//           options: ['Red', 'Blue', 'Yellow', 'Green'],
//           correct: 2,
//           explanation: 'Yellow is a primary color in painting but not in light. The primary colors of light are red, blue, and green.'
//         },
//         {
//           question: 'Which art movement was characterized by bright colors and bold brushstrokes?',
//           options: ['Impressionism', 'Cubism', 'Surrealism', 'Renaissance'],
//           correct: 0,
//           explanation: 'Impressionism was characterized by bright colors, bold brushstrokes, and capturing the effects of light.'
//         },
//         {
//           question: 'What is the technique of painting on wet plaster called?',
//           options: ['Oil painting', 'Watercolor', 'Fresco', 'Acrylic'],
//           correct: 2,
//           explanation: 'Fresco is the technique of painting on wet plaster, commonly used in Renaissance art.'
//         },
//         {
//           question: 'Who is known for cutting off his own ear?',
//           options: ['Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí', 'Claude Monet'],
//           correct: 1,
//           explanation: 'Vincent van Gogh is famously known for cutting off his own ear during a period of mental illness.'
//         }
//       ],
//       '2': [
//         {
//           question: 'What is the name of the famous sculpture by Michelangelo?',
//           options: ['The Thinker', 'David', 'Venus de Milo', 'The Kiss'],
//           correct: 1,
//           explanation: 'David is the famous marble sculpture by Michelangelo, depicting the biblical hero David.'
//         },
//         {
//           question: 'Which artist is known for his "Blue Period"?',
//           options: ['Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí', 'Henri Matisse'],
//           correct: 0,
//           explanation: 'Pablo Picasso is known for his "Blue Period," characterized by somber paintings in shades of blue.'
//         },
//         {
//           question: 'What is the most famous painting by Edvard Munch?',
//           options: ['The Scream', 'Starry Night', 'The Persistence of Memory', 'Guernica'],
//           correct: 0,
//           explanation: 'The Scream is the most famous painting by Edvard Munch, depicting a figure with an agonized expression.'
//         },
//         {
//           question: 'Which art movement was founded by Salvador Dalí?',
//           options: ['Cubism', 'Surrealism', 'Impressionism', 'Expressionism'],
//           correct: 1,
//           explanation: 'Salvador Dalí was a prominent figure in the Surrealism movement, known for his bizarre and dreamlike imagery.'
//         },
//         {
//           question: 'What is the technique of using small dots to create an image called?',
//           options: ['Pointillism', 'Impressionism', 'Cubism', 'Expressionism'],
//           correct: 0,
//           explanation: 'Pointillism is the technique of using small dots of color to create an image, developed by Georges Seurat.'
//         }
//       ],
//       '3': [
//         {
//           question: 'Who painted "The Starry Night"?',
//           options: ['Vincent van Gogh', 'Claude Monet', 'Pablo Picasso', 'Salvador Dalí'],
//           correct: 0,
//           explanation: 'Vincent van Gogh painted "The Starry Night" while staying at the Saint-Paul-de-Mausole asylum.'
//         },
//         {
//           question: 'What is the most famous work by Leonardo da Vinci?',
//           options: ['The Last Supper', 'Mona Lisa', 'Vitruvian Man', 'The Annunciation'],
//           correct: 1,
//           explanation: 'The Mona Lisa is Leonardo da Vinci\'s most famous work, known for its enigmatic smile.'
//         },
//         {
//           question: 'Which artist is known for his "Campbell\'s Soup Cans"?',
//           options: ['Andy Warhol', 'Roy Lichtenstein', 'Jasper Johns', 'Robert Rauschenberg'],
//           correct: 0,
//           explanation: 'Andy Warhol is famous for his "Campbell\'s Soup Cans" series, which became an icon of Pop Art.'
//         },
//         {
//           question: 'What is the technique of painting with water-soluble pigments called?',
//           options: ['Oil painting', 'Watercolor', 'Acrylic', 'Tempera'],
//           correct: 1,
//           explanation: 'Watercolor is the technique of painting with water-soluble pigments on paper or other absorbent surfaces.'
//         },
//         {
//           question: 'Who sculpted "The Thinker"?',
//           options: ['Auguste Rodin', 'Michelangelo', 'Donatello', 'Bernini'],
//           correct: 0,
//           explanation: 'Auguste Rodin sculpted "The Thinker," originally part of his larger work "The Gates of Hell."'
//         }
//       ],
//       '4': [
//         {
//           question: 'What is the most famous painting by Claude Monet?',
//           options: ['Water Lilies', 'Impression, Sunrise', 'Haystacks', 'Rouen Cathedral'],
//           correct: 1,
//           explanation: 'Impression, Sunrise by Claude Monet gave the Impressionist movement its name.'
//         },
//         {
//           question: 'Which artist is known for his "Drip Painting" technique?',
//           options: ['Jackson Pollock', 'Mark Rothko', 'Willem de Kooning', 'Franz Kline'],
//           correct: 0,
//           explanation: 'Jackson Pollock is famous for his "Drip Painting" technique, where he poured paint onto canvas.'
//         },
//         {
//           question: 'What is the technique of carving into a surface to create an image called?',
//           options: ['Sculpture', 'Engraving', 'Etching', 'Relief'],
//           correct: 1,
//           explanation: 'Engraving is the technique of carving or incising a design into a hard surface.'
//         },
//         {
//           question: 'Who painted "Guernica"?',
//           options: ['Pablo Picasso', 'Salvador Dalí', 'Joan Miró', 'Fernand Léger'],
//           correct: 0,
//           explanation: 'Pablo Picasso painted "Guernica" as a response to the bombing of the Basque town during the Spanish Civil War.'
//         },
//         {
//           question: 'What is the technique of using light and shadow to create depth called?',
//           options: ['Perspective', 'Chiaroscuro', 'Foreshortening', 'Sfumato'],
//           correct: 1,
//           explanation: 'Chiaroscuro is the technique of using strong contrasts between light and dark to create depth and volume.'
//         }
//       ],
//       '5': [
//         {
//           question: 'Who is known as the "Father of Modern Art"?',
//           options: ['Pablo Picasso', 'Paul Cézanne', 'Vincent van Gogh', 'Claude Monet'],
//           correct: 1,
//           explanation: 'Paul Cézanne is often called the "Father of Modern Art" for his influence on 20th-century art movements.'
//         },
//         {
//           question: 'What is the technique of painting on glass called?',
//           options: ['Stained glass', 'Glass painting', 'Vitreous painting', 'Enamel painting'],
//           correct: 0,
//           explanation: 'Stained glass is the technique of creating decorative windows by coloring glass with metallic oxides.'
//         },
//         {
//           question: 'Which artist is known for his "Cut-Outs"?',
//           options: ['Henri Matisse', 'Pablo Picasso', 'Georges Braque', 'Fernand Léger'],
//           correct: 0,
//           explanation: 'Henri Matisse is famous for his "Cut-Outs," created by cutting shapes from colored paper.'
//         },
//         {
//           question: 'What is the technique of painting with egg yolk and pigment called?',
//           options: ['Oil painting', 'Tempera', 'Fresco', 'Encaustic'],
//           correct: 1,
//           explanation: 'Tempera is the technique of painting with pigments mixed with egg yolk, used before the invention of oil paint.'
//         },
//         {
//           question: 'Who painted "The Persistence of Memory"?',
//           options: ['Salvador Dalí', 'René Magritte', 'Max Ernst', 'Yves Tanguy'],
//           correct: 0,
//           explanation: 'Salvador Dalí painted "The Persistence of Memory," featuring melting clocks in a dreamlike landscape.'
//         }
//       ]
//     }
//   }
// };

export default function QuizPage({ params }: { params: Promise<{ id: string }> }) {
  const { data: session } = useSession();
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { id } = React.use(params);
  const [quizStartTime, setQuizStartTime] = useState<number>(Date.now());
  
  // Get the category data
  const categoryData = allQuizzes[id as keyof typeof allQuizzes];
  const [currentQuizId, setCurrentQuizId] = useState('1'); // Start with first quiz
  
  // Get the current quiz questions
  const currentQuiz = categoryData?.quizzes?.[currentQuizId as keyof typeof categoryData.quizzes];
  const questions = currentQuiz || [];
  
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(questions.length).fill(null));
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  // Update userAnswers when questions change
  React.useEffect(() => {
    setUserAnswers(new Array(questions.length).fill(null));
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setQuizStartTime(Date.now());
  }, [questions.length]);

  // Function to update user progress
  const updateUserProgress = async (finalScore: number, correctAnswers: number) => {
    try {
      const studyTime = Math.round((Date.now() - quizStartTime) / 1000 / 60); // Convert to minutes
      
      const response = await fetch('/api/progress', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          categoryId: id,
          quizId: currentQuizId,
          score: finalScore,
          totalQuestions: questions.length,
          correctAnswers: correctAnswers,
          studyTime: studyTime
        }),
      });

      if (!response.ok) {
        console.error('Failed to update progress');
      }
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Please log in to access this quiz.</p>
      </div>
    );
  }

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
        <p className="text-xl text-gray-600">Quiz category not found.</p>
      </div>
    );
  }

  const handleAnswerSelect = (answerIndex: number) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = answerIndex;
    setUserAnswers(newUserAnswers);
  };

  const handleNext = () => {
    if (userAnswers[currentQuestion] === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      // Update progress when quiz is completed
      const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].correct).length;
      const finalScore = Math.round((correctAnswers / questions.length) * 100);
      updateUserProgress(finalScore, correctAnswers);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setUserAnswers(new Array(questions.length).fill(null));
    setScore(0);
    setShowResults(false);
  };

  const handleNextQuiz = () => {
    const quizIds = Object.keys(categoryData.quizzes);
    const currentIndex = quizIds.indexOf(currentQuizId);
    if (currentIndex < quizIds.length - 1) {
      const nextQuizId = quizIds[currentIndex + 1];
      setCurrentQuizId(nextQuizId);
      setCurrentQuestion(0);
      setUserAnswers(new Array(categoryData.quizzes[nextQuizId as keyof typeof categoryData.quizzes].length).fill(null));
      setScore(0);
      setShowResults(false);
      setQuizStartTime(Date.now()); // Reset quiz start time for new quiz
    }
  };

  if (showResults) {
    const correctAnswers = userAnswers.filter((answer, index) => answer === questions[index].correct).length;
    const wrongAnswers = questions.length - correctAnswers;
    const percentage = Math.round((correctAnswers / questions.length) * 100);
    
    const quizIds = Object.keys(categoryData.quizzes);
    const currentIndex = quizIds.indexOf(currentQuizId);
    const hasMoreQuizzes = currentIndex < quizIds.length - 1;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">🎉 Quiz Completed!</h1>
            <p className="text-lg text-gray-600">Great job! Here&apos;s how you performed</p>
          </div>

          {/* Main Results Card */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mb-8">
            {/* Score Display */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">{percentage}%</div>
                  <div className="text-sm text-blue-100">Score</div>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {percentage >= 80 ? 'Excellent!' : percentage >= 60 ? 'Good Job!' : percentage >= 40 ? 'Not Bad!' : 'Keep Practicing!'}
              </h2>
              <p className="text-gray-600">You got {correctAnswers} out of {questions.length} questions correct</p>
              <p className="text-gray-500 text-sm mt-2">{categoryData.title} - Quiz {currentQuizId}</p>
            </div>

            {/* Statistics Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Correct Answers */}
              <div className="bg-green-50 rounded-2xl p-6 text-center border border-green-200">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">{correctAnswers}</div>
                <div className="text-green-700 font-medium">Correct Answers</div>
              </div>

              {/* Wrong Answers */}
              <div className="bg-red-50 rounded-2xl p-6 text-center border border-red-200">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">{wrongAnswers}</div>
                <div className="text-red-700 font-medium">Wrong Answers</div>
              </div>

              {/* Total Questions */}
              <div className="bg-blue-50 rounded-2xl p-6 text-center border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{questions.length}</div>
                <div className="text-blue-700 font-medium">Total Questions</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => router.push('/quiz')}
                className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
              >
                <div className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to Dashboard
                </div>
              </button>
              {hasMoreQuizzes ? (
                <button
                  onClick={handleNextQuiz}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center justify-center">
                    Next Quiz
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </button>
              ) : (
                <button
                  onClick={handleRestart}
                  className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-200 font-medium shadow-lg hover:shadow-xl"
                >
                  <div className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Retake Quiz
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Question Review Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Question Review</h3>
            <div className="space-y-4">
              {questions.map((question, index) => {
                const userAnswer = userAnswers[index];
                const isCorrect = userAnswer === question.correct;
                
                return (
                  <div key={index} className={`p-4 rounded-xl border-2 ${
                    isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                  }`}>
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">Question {index + 1}</h4>
                      <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
                      }`}>
                        {isCorrect ? (
                          <>
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Correct
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Incorrect
                          </>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-2">{question.question}</p>
                    <div className="text-sm text-gray-600">
                      <span className="font-medium">Your answer:</span> {userAnswer !== null ? question.options[userAnswer] : 'Not answered'}
                    </div>
                    {!isCorrect && (
                      <div className="text-sm text-green-700 mt-1">
                        <span className="font-medium">Correct answer:</span> {question.options[question.correct]}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* More Quizzes Section - Show remaining quizzes in the same category */}
          {hasMoreQuizzes && (
            <div className="bg-white rounded-3xl shadow-2xl p-8 mt-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Continue Learning</h3>
              <p className="text-gray-600 text-center mb-8">Ready for your next challenge? Try these remaining quizzes!</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {quizIds.slice(currentIndex + 1).map((quizId) => (
                  <div key={quizId} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className={`w-12 h-12 bg-gradient-to-br ${categoryData.color} rounded-xl flex items-center justify-center mb-4`}>
                      <span className="text-white text-lg font-bold">{quizId}</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{categoryData.title} Quiz {quizId}</h4>
                    <p className="text-gray-600 text-sm mb-4">{categoryData.quizzes[quizId as keyof typeof categoryData.quizzes].length} Questions</p>
                    <button 
                      onClick={() => {
                        setCurrentQuizId(quizId);
                        setCurrentQuestion(0);
                        setUserAnswers(new Array(categoryData.quizzes[quizId as keyof typeof categoryData.quizzes].length).fill(null));
                        setScore(0);
                        setShowResults(false);
                        setQuizStartTime(Date.now()); // Reset quiz start time for new quiz
                      }}
                      className={`w-full bg-gradient-to-r ${categoryData.color} text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl`}
                    >
                      <span>Start Quiz</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link 
                  href="/quiz"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  Back to All Categories
                </Link>
              </div>
            </div>
          )}

          {/* Other Categories Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 mt-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Explore Other Categories</h3>
            <p className="text-gray-600 text-center mb-8">Ready to try something different? Explore these categories!</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(allQuizzes).map(([categoryId, category]) => {
                if (categoryId === id) return null; // Skip current category
                
                return (
                  <div key={categoryId} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                      <span className="text-white text-2xl">{category.icon}</span>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{category.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                    <Link 
                      href={`/quiz/${categoryId}`}
                      className={`w-full bg-gradient-to-r ${category.color} text-white py-3 px-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl`}
                    >
                      <span>Start Category</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/quiz"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Back to All Categories
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const selectedAnswer = userAnswers[currentQuestion];
  const isCorrect = selectedAnswer === currentQ.correct;
  const showExplanation = selectedAnswer !== null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <span className="text-2xl mr-3">{categoryData.icon}</span>
              <h1 className="text-2xl font-bold text-gray-800">{categoryData.title}</h1>
            </div>
            <p className="text-gray-600">Quiz {currentQuizId} - Question {currentQuestion + 1} of {questions.length}</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">{currentQ.question}</h2>
            
            <div className="space-y-3">
              {currentQ.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectAnswer = index === currentQ.correct;
                let buttonClasses = 'w-full text-left p-4 rounded-lg border-2 transition-all duration-200 flex items-center justify-between';
                
                if (isSelected) {
                  if (isCorrectAnswer) {
                    buttonClasses += ' border-green-500 bg-green-50 text-green-700';
                  } else {
                    buttonClasses += ' border-red-500 bg-red-50 text-red-700';
                  }
                } else if (showExplanation && isCorrectAnswer) {
                  buttonClasses += ' border-green-500 bg-green-50 text-green-700';
                } else {
                  buttonClasses += ' border-gray-200 hover:border-gray-300 hover:bg-gray-50';
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={`${buttonClasses} ${showExplanation ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                  >
                    <span className="font-medium">{option}</span>
                    {showExplanation && (
                      <div className="flex items-center">
                        {isCorrectAnswer ? (
                          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        ) : isSelected ? (
                          <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                        ) : null}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {showExplanation && (
            <div className={`mb-6 p-4 rounded-lg border-l-4 ${
              isCorrect 
                ? 'bg-green-50 border-green-500 text-green-700' 
                : 'bg-red-50 border-red-500 text-red-700'
            }`}>
              <div className="flex items-start">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 mt-0.5 ${
                  isCorrect ? 'bg-green-500' : 'bg-red-500'
                }`}>
                  {isCorrect ? (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold mb-1">
                    {isCorrect ? 'Correct!' : 'Incorrect!'}
                  </h4>
                  <p className="text-sm">{currentQ.explanation}</p>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between">
            <button
              onClick={() => {
                if (currentQuestion > 0) {
                  setCurrentQuestion(currentQuestion - 1);
                }
              }}
              disabled={currentQuestion === 0}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
            >
            Previous
            </button>
            
            <button
              onClick={handleNext}
              disabled={selectedAnswer === null}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 