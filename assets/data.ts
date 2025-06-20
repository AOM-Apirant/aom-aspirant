export const allQuizzes = {
    // General Knowledge Category - Multiple separate quizzes
    'gsr': {
      title: 'G & SR Rules',
      description: 'Test your general knowledge with various topics',
      icon: '🧠',
      color: 'from-blue-500 to-blue-600',
      quizzes: {
        '1': [
          {
            question: 'What is the capital of India?',
            options: ['Mumbai', 'Delhi', 'Kolkata', 'Chennai'],
            correct: 1,
            explanation: 'Delhi is the capital of India. It has been the capital since 1911 when the British moved it from Kolkata.'
          },
          {
            question: 'Which planet is known as the Red Planet?',
            options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
            correct: 1,
            explanation: 'Mars is known as the Red Planet due to its reddish appearance, which is caused by iron oxide (rust) on its surface.'
          },
          {
            question: 'What is the largest ocean on Earth?',
            options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
            correct: 3,
            explanation: 'The Pacific Ocean is the largest and deepest ocean on Earth, covering about 30% of the Earth&apos;s surface.'
          },
          {
            question: 'Who wrote "Romeo and Juliet"?',
            options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
            correct: 1,
            explanation: 'William Shakespeare wrote the famous tragedy "Romeo and Juliet" in the late 16th century.'
          },
          {
            question: 'What is the chemical symbol for gold?',
            options: ['Ag', 'Au', 'Fe', 'Cu'],
            correct: 1,
            explanation: 'Au is the chemical symbol for gold, derived from the Latin word "aurum."'
          }
        ],
        '2': [
          {
            question: 'Which country is home to the kangaroo?',
            options: ['New Zealand', 'Australia', 'South Africa', 'Brazil'],
            correct: 1,
            explanation: 'Kangaroos are native to Australia and are one of the country\'s most iconic animals.'
          },
          {
            question: 'What is the largest desert in the world?',
            options: ['Sahara Desert', 'Arabian Desert', 'Gobi Desert', 'Antarctic Desert'],
            correct: 0,
            explanation: 'The Sahara Desert in Africa is the largest hot desert in the world, covering approximately 9.2 million square kilometers.'
          },
          {
            question: 'Which programming language is known as the "language of the web"?',
            options: ['Python', 'Java', 'JavaScript', 'C++'],
            correct: 2,
            explanation: 'JavaScript is often called the "language of the web" because it is the primary language used for client-side web development.'
          },
          {
            question: 'What does HTML stand for?',
            options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Home Tool Markup Language', 'Hyperlink and Text Markup Language'],
            correct: 0,
            explanation: 'HTML stands for Hyper Text Markup Language, which is the standard markup language for creating web pages.'
          },
          {
            question: 'Who painted the Mona Lisa?',
            options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
            correct: 1,
            explanation: 'Leonardo da Vinci painted the Mona Lisa, one of the most famous paintings in the world.'
          }
        ],
        '3': [
          {
            question: 'What is the longest river in the world?',
            options: ['Amazon River', 'Nile River', 'Yangtze River', 'Mississippi River'],
            correct: 1,
            explanation: 'The Nile River in Africa is considered the longest river in the world, flowing approximately 6,650 kilometers.'
          },
          {
            question: 'Which mountain range runs through South America?',
            options: ['Rocky Mountains', 'Himalayas', 'Andes', 'Alps'],
            correct: 2,
            explanation: 'The Andes mountain range runs along the western coast of South America and is the longest continental mountain range in the world.'
          },
          {
            question: 'What is the capital of Japan?',
            options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'],
            correct: 2,
            explanation: 'Tokyo is the capital and largest city of Japan, serving as the country\'s political and economic center.'
          },
          {
            question: 'Which ocean is the smallest?',
            options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
            correct: 3,
            explanation: 'The Arctic Ocean is the smallest and shallowest of the world\'s five major oceans.'
          },
          {
            question: 'What is the hardest natural substance on Earth?',
            options: ['Steel', 'Diamond', 'Granite', 'Iron'],
            correct: 1,
            explanation: 'Diamond is the hardest natural substance on Earth, scoring 10 on the Mohs scale of mineral hardness.'
          }
        ],
        '4': [
          {
            question: 'What is the atomic number of carbon?',
            options: ['4', '6', '8', '12'],
            correct: 1,
            explanation: 'Carbon has an atomic number of 6, meaning it has 6 protons in its nucleus.'
          },
          {
            question: 'What is the most abundant gas in Earth\'s atmosphere?',
            options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
            correct: 2,
            explanation: 'Nitrogen is the most abundant gas in Earth\'s atmosphere, making up about 78% of the air we breathe.'
          },
          {
            question: 'What is the pH of pure water?',
            options: ['5', '6', '7', '8'],
            correct: 2,
            explanation: 'Pure water has a neutral pH of 7, which is neither acidic nor basic.'
          },
          {
            question: 'Which element is essential for life and makes up about 65% of the human body?',
            options: ['Carbon', 'Oxygen', 'Hydrogen', 'Nitrogen'],
            correct: 1,
            explanation: 'Oxygen is essential for life and makes up about 65% of the human body by mass.'
          },
          {
            question: 'What is the main theme of "To Kill a Mockingbird"?',
            options: ['Love and romance', 'Racial injustice', 'War and peace', 'Coming of age'],
            correct: 1,
            explanation: 'The main theme of "To Kill a Mockingbird" is racial injustice and the moral growth of the protagonist.'
          }
        ],
        '5': [
          {
            question: 'Which author wrote "Pride and Prejudice"?',
            options: ['Emily Brontë', 'Charlotte Brontë', 'Jane Austen', 'Mary Shelley'],
            correct: 2,
            explanation: 'Jane Austen wrote "Pride and Prejudice," one of the most beloved novels in English literature.'
          },
          {
            question: 'What is the setting of "The Great Gatsby"?',
            options: ['1920s America', 'Victorian England', 'Ancient Rome', 'Modern Japan'],
            correct: 0,
            explanation: '"The Great Gatsby" is set in 1920s America, specifically in New York during the Jazz Age.'
          },
          {
            question: 'Who is the author of "1984"?',
            options: ['Aldous Huxley', 'George Orwell', 'Ray Bradbury', 'H.G. Wells'],
            correct: 1,
            explanation: 'George Orwell wrote "1984," a dystopian novel about totalitarian surveillance and control.'
          },
          {
            question: 'What type of poem is a sonnet?',
            options: ['A 14-line poem', 'A 10-line poem', 'A 20-line poem', 'A free verse poem'],
            correct: 0,
            explanation: 'A sonnet is a 14-line poem that typically follows a specific rhyme scheme and meter.'
          },
          {
            question: 'Which CSS property is used to change the text color?',
            options: ['text-color', 'color', 'font-color', 'text-style'],
            correct: 1,
            explanation: 'The "color" property in CSS is used to set the color of text elements.'
          }
        ]
      }
    },
  
    // Geography Category - Multiple separate quizzes
    'operating': {
      title: 'Operating Department',
      description: 'Explore world operating department with various topics',
      icon: '🌍',
      color: 'from-green-500 to-green-600',
      quizzes: {
        '1': [
          {
            question: 'Over the trailed through points, under no circumstances should a train be.',
            options: ['Backed', 'Move forward', 'Run with MPS', 'None of the above'],
            correct: 0,
            explanation: 'Backed is the correct answer.'
          },
          {
            question: 'Dead Locomotive with defects in under gear equipment can be attached only by.',
            options: ['Freight trains', 'Loco', 'Parcel trains', 'Passenger trains'],
            correct: 0,
            explanation: 'Freight trains is the correct answer.'
          },
          {
            question: 'When a colour light Distant is combined with LSS, this marker is not required.',
            options: ['A - marker', 'C - marker', 'G - marker', 'P - marker'],
            correct: 3,
            explanation: 'P - marker is the correct answer.'
          },
          {
            question: 'Whenever Inner Distant is provided, the aspects Distant Signal is capable of displaying.',
            options: ['Caution, attention, proceed', 'Caution, attention', 'Proceed, attention', 'Stop, caution'],
            correct: 2,
            explanation: 'Proceed, attention is the correct answer.'
          },
          {
            question: 'When a signal is newly erected or shifted, caution order shall be given for a period of.......',
            options: ['30 days', '45 days', '60 days', '90 days'],
            correct: 3,
            explanation: '90 days is the correct answer.'
          },
          {
            question: 'Even under normal circumstances subject to observance of permanent / temporary speed restrictions in force all Passenger carrying trains should run at.....',
            options: ['Booked speed', 'Maximum permissible speed', '100 kmph', '110 kmph'],
            correct: 1,
            explanation: 'Maximum permissible speed (MPS) is the correct answer.'
          },
          {
            question: 'In automatic block system to dispatch a relief loco / train into the occupied block section ........ is given as the ATP for the relief loco / train.',
            options: ['T/A 912', 'T/B 912', 'T/C 912', 'T/D 912'],
            correct: 2,
            explanation: 'T/C 912 is the correct answer.'
          },
          {
            question: 'The following forms shall be issued in printed format ........',
            options: ['T/369(3b)', 'T/409', 'T/462', 'T/D 1425'],
            correct: 3,
            explanation: 'T/D 1425 is the correct answer.'
          },
          {
            question: 'To attach a dead engine to a train, a certificate of ‘fit to run’ is re-quired, which shall be issued by.',
            options: ['Loco Inspector', 'Power controller', 'Section Engineer', 'Any one of the above'],
            correct: 3,
            explanation: 'Any one of the above is the correct answer.'
          },
          {
            question: 'Blocking of a portion of line for maintenance work by more than one department is called.',
            options: ['Integrated block', 'Power block', 'Shadow block', 'No specific name'],
            correct: 0,
            explanation: 'Integrated block is the correct answer.'
          }
        ],
        '2': [
          {
            question: 'Even though departure signals are taken off, LP shall stop at stations where stoppages are scheduled in the .......',
            options: ['CTR', 'SOB', 'VG', 'WTT'],
            correct: 3,
            explanation: 'WTT is the correct answer.'
          },
          {
            question: 'When healthy section is temporarily isolated and re-energised, if train entered faulty section, the speed of the first train by day / night shall be.',
            options: ['20/10 kmph', '25/10 kmph', '40/40 kmph', '60/30 kmph'],
            correct: 3,
            explanation: '60/30 kmph is the correct answer.'
          },
          {
            question: 'At standard – II R interlocked station maximum speed permitted for the train over main line points is ........',
            options: ['75 kmph', '110 kmph', '140 kmph', '160 kmph'],
            correct: 1,
            explanation: '110 kmph is the correct answer.'
          },
          {
            question: 'The effective brake power in case of Mail/Express/ Passenger at the originating station shall be 100% and enroute should be not less than ........',
            options: ['90%', '95%', '100%', 'Not specified'],
            correct: 0,
            explanation: '90% is the correct answer.'
          },
          {
            question: 'In automatic section, if ‘A’ and ‘AG’ marker lights lit together or not lit, the corresponding signal to be treated as .........',
            options: ['Automatic signal', 'Automatic gate signal', 'Manual stop signal', 'None of the above'],
            correct: 2,
            explanation: 'Manual stop signal is the correct answer.'
          },
          {
            question: 'Loco Pilot and Guard notice Flat tyre on Run in Block Section should clear block section with a speed restriction of .........',
            options: ['10 kmph', '15 kmph', '20 kmph', '30 kmph'],
            correct: 3,
            explanation: '30 kmph is the correct answer.'
          },
          {
            question: 'When engine whistle fails on run, after clearing block section cautiously and ........',
            options: ['Ask for repair or relief', 'Advise PCOR/TLC and act accordingly', 'Continue with 40 kmph', 'None of the above'],
            correct: 0,
            explanation: 'Ask for repair or relief is the correct answer.'
          },
          {
            question: 'In the Caution order, the names of the stations concerned should be written in full, and this should not be used.',
            options: ['Capitals', 'Codes', 'Letters', 'Numerals'],
            correct: 1,
            explanation: 'Codes is the correct answer.'
          },
          {
            question: 'Intermediate Block Signaling system may be provided on .......', 
            options: ['Single line', 'Double line', 'Multiple lines', 'Any of the above'],
            correct: 3,
            explanation: 'Any of the above is the correct answer.'
          },
          {
            question: 'When the Loco Pilot notices a signal warning of an obstruction, except detonator, he shall .........',
            options: ['Proceed cautiously', 'Proceed upto next station and report', 'Stop after noticing the obstruction', 'Stop immediately'],
            correct: 4,
            explanation: 'Stop immediately is the correct answer.'
          }
        ],
        '3': [
          {
            question: 'Maximum number of coaches in addition to the officers inspection coach attached in rear of SLR of Passenger or Mail & Express trains is ........',
            options: ['1', '2', '3', '4'],
            correct: 1,
            explanation: '2 is the correct answer.'
          },
          {
            question: 'When engine is pushing a train and Guard is not travelling in leading vehicle, the speed shall not exceed ........',
            options: ['8 kmph', '10 kmph', '15 kmph', 'Walking speed'],
            correct: 0,
            explanation: '8 kmph is the correct answer.'
          },
          {
            question: 'Violently waving a white light horizontally across the body of a person indicates ..........',
            options: ['Move away from the person showing', 'Proceed', 'Stop dead', 'Train parting'],
            correct: 2,
            explanation: 'Stop dead is the correct answer.'
          },
          {
            question: 'When ‘lurch’ is reported and subsequently a train is sent in the absence of engineering official, caution order is given to the LP to stop dead if considered safe, proceed at a speed of ........',
            options: ['8 kmph', '10 kmph', '15 kmph', '25 kmph'],
            correct: 1,
            explanation: '10 kmph is the correct answer.'
          },
          {
            question: 'In case of’ A’ and ‘AG’ markers are lit together, signal above shall be deemed to work as a Manual stop signal and LP shall pass only on assumption of ‘off’ position or on receipt of ........',
            options: ['T/369(3b)', 'T/369(3b) + PHS)', 'T/369(1) + PHS', 'None of the above'],
            correct: 1,
            explanation: 'T/369(3b) + PHS is the correct answer.'
          },
          {
            question: 'When more than one T/CAR is programmed to go in the same block section and clear to the next station the authorities for first T/CAR and last T/CAR are ........',
            options: ['Caution Order,  T/1708', 'Caution Order,  T/A 1708', 'T/1708,  Caution Order', 'T/A.1708,  Caution Order'],
            correct: 1,
            explanation: 'Caution Order,  T/A 1708 is the correct answer.'
          },
          {
            question: 'At train starting station, ‘is line clear’ shall be asked, ........ minutes before the booked departure of the passenger carrying trains.',
            options: ['5', '7', '10', 'As per WTT'],
            correct: 0,
            explanation: '5 minutes is the correct answer.'
          },
          {
            question: 'When centre SLR is provided in short trains, a maximum number of coaches permitted on either side of SLR is ........',
            options: ['1', '2', '3', '4'],
            correct: 3,
            explanation: '3 is the correct answer.'
          },
          {
            question: 'Data logger devices and C-TSR are provided for automatically updating train timings in ........',
            options: ['COA', 'FOIS', 'ICMS', 'LOCOS'],
            correct: 0,
            explanation: 'COA is the correct answer.'
          },
          {
            question: 'For all Goods trains at originating station “is line clear” should be asked',
            options: ['After BPC Signed', 'Before 5 minutes', 'Before 10 minutes', 'When the Train is ready'],
            correct: 3,
            explanation: 'When the Train is ready is the correct answer.'
          }
        ],
        '4': [
          {
            question: 'Under exceptional circumstances short formation trains not carrying passengers, not exceeding ........ eight wheeler units may be run without guard & without brake van/SLR',
            options: ['4', '6', '8', '10'],
            correct: 2,
            explanation: '8 is the correct answer.'
          },
          {
            question: '44.  The indication of the Calling On signal when taken ‘OFF’ is ........',
            options: ['Proceed cautiously', 'Stop dead', 'Proceed and be prepared to stop at next stop signal', 'Stop and then draw ahead with caution and be prepared to stop short of any obstruction'],
            correct: 3,
            explanation: 'Stop and then draw ahead with caution and be prepared to stop short of any obstruction is the correct answer.'
          },
          {
            question: 'If Loco Pilot enters block section without ATP and subsequently send his Assistant Loco Pilot with a memo to SM in rear, that SM shall arrange to send ........',
            options: ['Caution order', 'PLCT', 'T/369(3b)', 'T/A 602'],
            correct: 1,
            explanation: 'PLCT is the correct answer.'
          },
          {
            question: 'In UFSBI/SSBPAC(D) block instrument on Double line section to prevent Rear SM to take line clear what to be done.',
            options: ['Keeping LSS knob in Normal position', 'Take out LCB key', 'Take out SM’s key of Block Panel', 'None of the above'],
            correct: 1,
            explanation: 'Take out LCB key is the correct answer.'
          },
          {
            question: 'The indication that appear at the SM in rear, when Loco Pilot passes IBS at `ON’ is ........',
            options: ['K1', 'K2', 'K3', 'K4'],
            correct: 0,
            explanation: 'K1 is the correct answer.'
          },
          {
            question: 'Calling On signal may be provided below any stop signal, except .......',
            options: ['FSS', 'Home', 'LSS', 'Starter'],
            correct: 2,
            explanation: 'LSS is the correct answer.'
          },
          {
            question: 'When the Loco Pilot of a train experiences any abnormal condition on the track, shall stop his train at ........',
            options: ['Home signal of next station', 'LSS of next station', 'Next block station without clearing block section', 'Within station section'],
            correct: 0,
            explanation: 'Home signal of next station is the correct answer.'
          },
          {
            question: '66.  The number of detonators that are given to each fog signal man is ........',
            options: ['8', '10', '15', '20'],
            correct: 3,
            explanation: '20 is the correct answer.'
          },
          {
            question: 'From FSS the FSP is located at a distance of ........',
            options: ['120 m', '180 m', '270 m', '400 m'],
            correct: 2,
            explanation: '270 m is the correct answer.'
          },
          {
            question: 'The Guard shall issue a PN to the SM at stations not provided with BPAC for a stopping train after ensuring',
            options: ['Train runs through station', 'Train clears the block section', 'Train comes to a stop at the station', 'Train arrived completely and standing within fouling mark'],
            correct: 3,
            explanation: 'Train arrived completely and standing within fouling mark is the correct answer.'
          }
        ],
        '5': [
          {
            question: '“Danger Zone” means the zone lying around any live equipment with in a radius of ........',
            options: ['2 m', '2.5 m', '3 m', '4 m'],
            correct: 0,
            explanation: '2 m is the correct answer.'
          },
          {
            question: 'On Double line, to perform shunting beyond LSS, before giving authority, SM shall .......',
            options: ['Block back', 'Block forward', 'Obtain line block', 'None of the above'],
            correct: 1,
            explanation: 'Block forward is the correct answer.'
          },
          {
            question: 'If Loco Pilot enters block section without ATP and subsequently sends his Assistant Loco Pilot with a memo to SM in advance, that SM shall arrange to send ......',
            options: ['Caution order', 'PLCT', 'T/369(3b)', 'T/A 602'],
            correct: 0,
            explanation: 'Caution order is the correct answer.'
          },
          {
            question: 'When motor trolley is following a full length train or engine or another motor trolley, authority given as ATP is ........',
            options: ['ATP with out Line Clear', 'PLCT', 'T/1525', 'T/A 1525'],
            correct: 2,
            explanation: 'T/1525 is the correct answer.'
          },
          {
            question: 'When IBS is at “ON” and the telephone is out of order, Loco Pilot after waiting for five minutes shall proceed when view is clear /not clear up to next stop signal at a speed not exceeding ........',
            options: ['10/8  kmph', '15/8 kmpha', '20/10 kmph', '25/10 kmph'],
            correct: 1,
            explanation: '15/8 kmph is the correct answer.'
          },
          {
            question: 'When more than one TTM is programmed to go in the same block section and clear to the next station the authorities for first TTM and last TTM are ........',
            options: ['Caution Order,  T/465', 'Caution Order,  T/A 465', 'T/465,  Caution Order', 'T/A.465,  Caution Order'],
            correct: 1,
            explanation: 'Caution Order,  T/A 465 is the correct answer.'
          },
          {
            question: 'Mock drills for ART shall be conducted once in ........',
            options: ['a month', '2 months', '3 months', '4 months'],
            correct: 2,
            explanation: '3 months is the correct answer.'
          },
          {
            question: 'Heavy wind is considered dangerous for running trains if wind velocity is ........',
            options: ['45 kmph or more', '55 kmph or more', '60 kmph or more', '65 kmph or more'],
            correct: 3,
            explanation: '60 kmph or more is the correct answer.'
          },
          {
            question: 'VHF sets as a means of communication should be permitted only in the presence of supervisory staff for prolonged duration of ........',
            options: ['1 hour or more', '3 hours or more', '6 hours or more', '8 hours or more'],
            correct: 1,
            explanation: '3 hours or more is the correct answer.'
          },
          {
            question: 'The button to be operated by SM rear , to reset Analog Axle Counter, if IBS fails due to improper counting is ........',
            options: ['PB-1', 'PB-2', 'PB-3', 'PB-4'],
            correct: 1,
            explanation: 'PB-2 is the correct answer.'
          },
        ]
      }
    },
  
    // Science Category - Multiple separate quizzes
    'commercial': {
      title: 'Commercial Department',
      description: 'Discover commercial facts with various topics',
      icon: '🔬',
      color: 'from-red-500 to-red-600',
      quizzes: {
        '1': [
          {
            question: 'What is the chemical symbol for oxygen?',
            options: ['O', 'Ox', 'O2', 'Oxy'],
            correct: 0,
            explanation: 'O is the chemical symbol for oxygen, and O2 represents the oxygen molecule.'
          },
          {
            question: 'What is the hardest natural substance on Earth?',
            options: ['Steel', 'Diamond', 'Granite', 'Iron'],
            correct: 1,
            explanation: 'Diamond is the hardest natural substance on Earth, scoring 10 on the Mohs scale of mineral hardness.'
          },
          {
            question: 'What is the atomic number of hydrogen?',
            options: ['0', '1', '2', '3'],
            correct: 1,
            explanation: 'Hydrogen has an atomic number of 1, meaning it has 1 proton in its nucleus.'
          },
          {
            question: 'What is the most abundant element in the universe?',
            options: ['Helium', 'Carbon', 'Oxygen', 'Hydrogen'],
            correct: 3,
            explanation: 'Hydrogen is the most abundant element in the universe, making up about 75% of all matter.'
          },
          {
            question: 'What is the chemical formula for water?',
            options: ['H2O', 'CO2', 'O2', 'N2'],
            correct: 0,
            explanation: 'H2O is the chemical formula for water, consisting of two hydrogen atoms and one oxygen atom.'
          }
        ],
        '2': [
          {
            question: 'What is the speed of light?',
            options: ['299,792 km/s', '199,792 km/s', '399,792 km/s', '499,792 km/s'],
            correct: 0,
            explanation: 'The speed of light in a vacuum is approximately 299,792 kilometers per second.'
          },
          {
            question: 'What is the largest organ in the human body?',
            options: ['Heart', 'Brain', 'Liver', 'Skin'],
            correct: 3,
            explanation: 'The skin is the largest organ in the human body, covering about 20 square feet in adults.'
          },
          {
            question: 'What is the chemical symbol for gold?',
            options: ['Ag', 'Au', 'Fe', 'Cu'],
            correct: 1,
            explanation: 'Au is the chemical symbol for gold, derived from the Latin word "aurum."'
          },
          {
            question: 'What is the atomic number of carbon?',
            options: ['4', '6', '8', '12'],
            correct: 1,
            explanation: 'Carbon has an atomic number of 6, meaning it has 6 protons in its nucleus.'
          },
          {
            question: 'What is the pH of pure water?',
            options: ['5', '6', '7', '8'],
            correct: 2,
            explanation: 'Pure water has a neutral pH of 7, which is neither acidic nor basic.'
          }
        ],
        '3': [
          {
            question: 'What is the most abundant gas in Earth\'s atmosphere?',
            options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
            correct: 2,
            explanation: 'Nitrogen is the most abundant gas in Earth\'s atmosphere, making up about 78% of the air we breathe.'
          },
          {
            question: 'What is the chemical symbol for silver?',
            options: ['Si', 'Ag', 'Sr', 'Au'],
            correct: 1,
            explanation: 'Ag is the chemical symbol for silver, derived from the Latin word "argentum."'
          },
          {
            question: 'What is the atomic number of helium?',
            options: ['1', '2', '3', '4'],
            correct: 1,
            explanation: 'Helium has an atomic number of 2, meaning it has 2 protons in its nucleus.'
          },
          {
            question: 'What is the chemical formula for carbon dioxide?',
            options: ['CO', 'CO2', 'C2O', 'C2O2'],
            correct: 1,
            explanation: 'CO2 is the chemical formula for carbon dioxide, consisting of one carbon atom and two oxygen atoms.'
          },
          {
            question: 'What is the boiling point of water at sea level?',
            options: ['90°C', '100°C', '110°C', '120°C'],
            correct: 1,
            explanation: 'Water boils at 100°C (212°F) at sea level under normal atmospheric pressure.'
          }
        ],
        '4': [
          {
            question: 'What is the chemical symbol for iron?',
            options: ['Ir', 'Fe', 'In', 'Fr'],
            correct: 1,
            explanation: 'Fe is the chemical symbol for iron, derived from the Latin word "ferrum."'
          },
          {
            question: 'What is the atomic number of nitrogen?',
            options: ['5', '6', '7', '8'],
            correct: 2,
            explanation: 'Nitrogen has an atomic number of 7, meaning it has 7 protons in its nucleus.'
          },
          {
            question: 'What is the chemical formula for methane?',
            options: ['CH3', 'CH4', 'C2H4', 'C2H6'],
            correct: 1,
            explanation: 'CH4 is the chemical formula for methane, consisting of one carbon atom and four hydrogen atoms.'
          },
          {
            question: 'What is the freezing point of water?',
            options: ['-10°C', '0°C', '10°C', '20°C'],
            correct: 1,
            explanation: 'Water freezes at 0°C (32°F) under normal atmospheric pressure.'
          },
          {
            question: 'What is the chemical symbol for copper?',
            options: ['Co', 'Cu', 'Cp', 'Cr'],
            correct: 1,
            explanation: 'Cu is the chemical symbol for copper, derived from the Latin word "cuprum."'
          }
        ],
        '5': [
          {
            question: 'What is the atomic number of oxygen?',
            options: ['6', '7', '8', '9'],
            correct: 2,
            explanation: 'Oxygen has an atomic number of 8, meaning it has 8 protons in its nucleus.'
          },
          {
            question: 'What is the chemical formula for glucose?',
            options: ['C6H12O6', 'C12H22O11', 'CH3COOH', 'NaHCO3'],
            correct: 0,
            explanation: 'C6H12O6 is the chemical formula for glucose, a simple sugar used by cells for energy.'
          },
          {
            question: 'What is the chemical symbol for sodium?',
            options: ['So', 'Na', 'Nd', 'No'],
            correct: 1,
            explanation: 'Na is the chemical symbol for sodium, derived from the Latin word "natrium."'
          },
          {
            question: 'What is the atomic number of neon?',
            options: ['8', '9', '10', '11'],
            correct: 2,
            explanation: 'Neon has an atomic number of 10, meaning it has 10 protons in its nucleus.'
          },
          {
            question: 'What is the chemical formula for sulfuric acid?',
            options: ['H2SO3', 'H2SO4', 'H3PO4', 'HNO3'],
            correct: 1,
            explanation: 'H2SO4 is the chemical formula for sulfuric acid, a strong acid commonly used in industry.'
          }
        ]
      }
    },
  
    // Art & Culture Category - Multiple separate quizzes
    'personnel': {
      title: 'Personnel Department',
      description: 'Learn about famous artists and cultural works',
      icon: '🎨',
      color: 'from-pink-500 to-pink-600',
      quizzes: {
        '1': [
          {
            question: 'Who painted the Mona Lisa?',
            options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
            correct: 1,
            explanation: 'Leonardo da Vinci painted the Mona Lisa, one of the most famous paintings in the world.'
          },
          {
            question: 'What is the primary color that is not a primary color of light?',
            options: ['Red', 'Blue', 'Yellow', 'Green'],
            correct: 2,
            explanation: 'Yellow is a primary color in painting but not in light. The primary colors of light are red, blue, and green.'
          },
          {
            question: 'Which art movement was characterized by bright colors and bold brushstrokes?',
            options: ['Impressionism', 'Cubism', 'Surrealism', 'Renaissance'],
            correct: 0,
            explanation: 'Impressionism was characterized by bright colors, bold brushstrokes, and capturing the effects of light.'
          },
          {
            question: 'What is the technique of painting on wet plaster called?',
            options: ['Oil painting', 'Watercolor', 'Fresco', 'Acrylic'],
            correct: 2,
            explanation: 'Fresco is the technique of painting on wet plaster, commonly used in Renaissance art.'
          },
          {
            question: 'Who is known for cutting off his own ear?',
            options: ['Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí', 'Claude Monet'],
            correct: 1,
            explanation: 'Vincent van Gogh is famously known for cutting off his own ear during a period of mental illness.'
          }
        ],
        '2': [
          {
            question: 'What is the name of the famous sculpture by Michelangelo?',
            options: ['The Thinker', 'David', 'Venus de Milo', 'The Kiss'],
            correct: 1,
            explanation: 'David is the famous marble sculpture by Michelangelo, depicting the biblical hero David.'
          },
          {
            question: 'Which artist is known for his "Blue Period"?',
            options: ['Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí', 'Henri Matisse'],
            correct: 0,
            explanation: 'Pablo Picasso is known for his "Blue Period," characterized by somber paintings in shades of blue.'
          },
          {
            question: 'What is the most famous painting by Edvard Munch?',
            options: ['The Scream', 'Starry Night', 'The Persistence of Memory', 'Guernica'],
            correct: 0,
            explanation: 'The Scream is the most famous painting by Edvard Munch, depicting a figure with an agonized expression.'
          },
          {
            question: 'Which art movement was founded by Salvador Dalí?',
            options: ['Cubism', 'Surrealism', 'Impressionism', 'Expressionism'],
            correct: 1,
            explanation: 'Salvador Dalí was a prominent figure in the Surrealism movement, known for his bizarre and dreamlike imagery.'
          },
          {
            question: 'What is the technique of using small dots to create an image called?',
            options: ['Pointillism', 'Impressionism', 'Cubism', 'Expressionism'],
            correct: 0,
            explanation: 'Pointillism is the technique of using small dots of color to create an image, developed by Georges Seurat.'
          }
        ],
        '3': [
          {
            question: 'Who painted "The Starry Night"?',
            options: ['Vincent van Gogh', 'Claude Monet', 'Pablo Picasso', 'Salvador Dalí'],
            correct: 0,
            explanation: 'Vincent van Gogh painted "The Starry Night" while staying at the Saint-Paul-de-Mausole asylum.'
          },
          {
            question: 'What is the most famous work by Leonardo da Vinci?',
            options: ['The Last Supper', 'Mona Lisa', 'Vitruvian Man', 'The Annunciation'],
            correct: 1,
            explanation: 'The Mona Lisa is Leonardo da Vinci\'s most famous work, known for its enigmatic smile.'
          },
          {
            question: 'Which artist is known for his "Campbell\'s Soup Cans"?',
            options: ['Andy Warhol', 'Roy Lichtenstein', 'Jasper Johns', 'Robert Rauschenberg'],
            correct: 0,
            explanation: 'Andy Warhol is famous for his "Campbell\'s Soup Cans" series, which became an icon of Pop Art.'
          },
          {
            question: 'What is the technique of painting with water-soluble pigments called?',
            options: ['Oil painting', 'Watercolor', 'Acrylic', 'Tempera'],
            correct: 1,
            explanation: 'Watercolor is the technique of painting with water-soluble pigments on paper or other absorbent surfaces.'
          },
          {
            question: 'Who sculpted "The Thinker"?',
            options: ['Auguste Rodin', 'Michelangelo', 'Donatello', 'Bernini'],
            correct: 0,
            explanation: 'Auguste Rodin sculpted "The Thinker," originally part of his larger work "The Gates of Hell."'
          }
        ],
        '4': [
          {
            question: 'What is the most famous painting by Claude Monet?',
            options: ['Water Lilies', 'Impression, Sunrise', 'Haystacks', 'Rouen Cathedral'],
            correct: 1,
            explanation: 'Impression, Sunrise by Claude Monet gave the Impressionist movement its name.'
          },
          {
            question: 'Which artist is known for his "Drip Painting" technique?',
            options: ['Jackson Pollock', 'Mark Rothko', 'Willem de Kooning', 'Franz Kline'],
            correct: 0,
            explanation: 'Jackson Pollock is famous for his "Drip Painting" technique, where he poured paint onto canvas.'
          },
          {
            question: 'What is the technique of carving into a surface to create an image called?',
            options: ['Sculpture', 'Engraving', 'Etching', 'Relief'],
            correct: 1,
            explanation: 'Engraving is the technique of carving or incising a design into a hard surface.'
          },
          {
            question: 'Who painted "Guernica"?',
            options: ['Pablo Picasso', 'Salvador Dalí', 'Joan Miró', 'Fernand Léger'],
            correct: 0,
            explanation: 'Pablo Picasso painted "Guernica" as a response to the bombing of the Basque town during the Spanish Civil War.'
          },
          {
            question: 'What is the technique of using light and shadow to create depth called?',
            options: ['Perspective', 'Chiaroscuro', 'Foreshortening', 'Sfumato'],
            correct: 1,
            explanation: 'Chiaroscuro is the technique of using strong contrasts between light and dark to create depth and volume.'
          }
        ],
        '5': [
          {
            question: 'Who is known as the "Father of Modern Art"?',
            options: ['Pablo Picasso', 'Paul Cézanne', 'Vincent van Gogh', 'Claude Monet'],
            correct: 1,
            explanation: 'Paul Cézanne is often called the "Father of Modern Art" for his influence on 20th-century art movements.'
          },
          {
            question: 'What is the technique of painting on glass called?',
            options: ['Stained glass', 'Glass painting', 'Vitreous painting', 'Enamel painting'],
            correct: 0,
            explanation: 'Stained glass is the technique of creating decorative windows by coloring glass with metallic oxides.'
          },
          {
            question: 'Which artist is known for his "Cut-Outs"?',
            options: ['Henri Matisse', 'Pablo Picasso', 'Georges Braque', 'Fernand Léger'],
            correct: 0,
            explanation: 'Henri Matisse is famous for his "Cut-Outs," created by cutting shapes from colored paper.'
          },
          {
            question: 'What is the technique of painting with egg yolk and pigment called?',
            options: ['Oil painting', 'Tempera', 'Fresco', 'Encaustic'],
            correct: 1,
            explanation: 'Tempera is the technique of painting with pigments mixed with egg yolk, used before the invention of oil paint.'
          },
          {
            question: 'Who painted "The Persistence of Memory"?',
            options: ['Salvador Dalí', 'René Magritte', 'Max Ernst', 'Yves Tanguy'],
            correct: 0,
            explanation: 'Salvador Dalí painted "The Persistence of Memory," featuring melting clocks in a dreamlike landscape.'
          }
        ]
      }
    },
    // Art & Culture Category - Multiple separate quizzes
    'operating-manual': {
        title: 'Operating Manual',
        description: 'Learn about operating manual with various topics',
        icon: '🎨',
        color: 'from-pink-500 to-pink-600',
        quizzes: {
          '1': [
            {
              question: 'Who painted the Mona Lisa?',
              options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
              correct: 1,
              explanation: 'Leonardo da Vinci painted the Mona Lisa, one of the most famous paintings in the world.'
            },
            {
              question: 'What is the primary color that is not a primary color of light?',
              options: ['Red', 'Blue', 'Yellow', 'Green'],
              correct: 2,
              explanation: 'Yellow is a primary color in painting but not in light. The primary colors of light are red, blue, and green.'
            },
            {
              question: 'Which art movement was characterized by bright colors and bold brushstrokes?',
              options: ['Impressionism', 'Cubism', 'Surrealism', 'Renaissance'],
              correct: 0,
              explanation: 'Impressionism was characterized by bright colors, bold brushstrokes, and capturing the effects of light.'
            },
            {
              question: 'What is the technique of painting on wet plaster called?',
              options: ['Oil painting', 'Watercolor', 'Fresco', 'Acrylic'],
              correct: 2,
              explanation: 'Fresco is the technique of painting on wet plaster, commonly used in Renaissance art.'
            },
            {
              question: 'Who is known for cutting off his own ear?',
              options: ['Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí', 'Claude Monet'],
              correct: 1,
              explanation: 'Vincent van Gogh is famously known for cutting off his own ear during a period of mental illness.'
            }
          ],
          '2': [
            {
              question: 'What is the name of the famous sculpture by Michelangelo?',
              options: ['The Thinker', 'David', 'Venus de Milo', 'The Kiss'],
              correct: 1,
              explanation: 'David is the famous marble sculpture by Michelangelo, depicting the biblical hero David.'
            },
            {
              question: 'Which artist is known for his "Blue Period"?',
              options: ['Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí', 'Henri Matisse'],
              correct: 0,
              explanation: 'Pablo Picasso is known for his "Blue Period," characterized by somber paintings in shades of blue.'
            },
            {
              question: 'What is the most famous painting by Edvard Munch?',
              options: ['The Scream', 'Starry Night', 'The Persistence of Memory', 'Guernica'],
              correct: 0,
              explanation: 'The Scream is the most famous painting by Edvard Munch, depicting a figure with an agonized expression.'
            },
            {
              question: 'Which art movement was founded by Salvador Dalí?',
              options: ['Cubism', 'Surrealism', 'Impressionism', 'Expressionism'],
              correct: 1,
              explanation: 'Salvador Dalí was a prominent figure in the Surrealism movement, known for his bizarre and dreamlike imagery.'
            },
            {
              question: 'What is the technique of using small dots to create an image called?',
              options: ['Pointillism', 'Impressionism', 'Cubism', 'Expressionism'],
              correct: 0,
              explanation: 'Pointillism is the technique of using small dots of color to create an image, developed by Georges Seurat.'
            }
          ],
          '3': [
            {
              question: 'Who painted "The Starry Night"?',
              options: ['Vincent van Gogh', 'Claude Monet', 'Pablo Picasso', 'Salvador Dalí'],
              correct: 0,
              explanation: 'Vincent van Gogh painted "The Starry Night" while staying at the Saint-Paul-de-Mausole asylum.'
            },
            {
              question: 'What is the most famous work by Leonardo da Vinci?',
              options: ['The Last Supper', 'Mona Lisa', 'Vitruvian Man', 'The Annunciation'],
              correct: 1,
              explanation: 'The Mona Lisa is Leonardo da Vinci\'s most famous work, known for its enigmatic smile.'
            },
            {
              question: 'Which artist is known for his "Campbell\'s Soup Cans"?',
              options: ['Andy Warhol', 'Roy Lichtenstein', 'Jasper Johns', 'Robert Rauschenberg'],
              correct: 0,
              explanation: 'Andy Warhol is famous for his "Campbell\'s Soup Cans" series, which became an icon of Pop Art.'
            },
            {
              question: 'What is the technique of painting with water-soluble pigments called?',
              options: ['Oil painting', 'Watercolor', 'Acrylic', 'Tempera'],
              correct: 1,
              explanation: 'Watercolor is the technique of painting with water-soluble pigments on paper or other absorbent surfaces.'
            },
            {
              question: 'Who sculpted "The Thinker"?',
              options: ['Auguste Rodin', 'Michelangelo', 'Donatello', 'Bernini'],
              correct: 0,
              explanation: 'Auguste Rodin sculpted "The Thinker," originally part of his larger work "The Gates of Hell."'
            }
          ],
          '4': [
            {
              question: 'What is the most famous painting by Claude Monet?',
              options: ['Water Lilies', 'Impression, Sunrise', 'Haystacks', 'Rouen Cathedral'],
              correct: 1,
              explanation: 'Impression, Sunrise by Claude Monet gave the Impressionist movement its name.'
            },
            {
              question: 'Which artist is known for his "Drip Painting" technique?',
              options: ['Jackson Pollock', 'Mark Rothko', 'Willem de Kooning', 'Franz Kline'],
              correct: 0,
              explanation: 'Jackson Pollock is famous for his "Drip Painting" technique, where he poured paint onto canvas.'
            },
            {
              question: 'What is the technique of carving into a surface to create an image called?',
              options: ['Sculpture', 'Engraving', 'Etching', 'Relief'],
              correct: 1,
              explanation: 'Engraving is the technique of carving or incising a design into a hard surface.'
            },
            {
              question: 'Who painted "Guernica"?',
              options: ['Pablo Picasso', 'Salvador Dalí', 'Joan Miró', 'Fernand Léger'],
              correct: 0,
              explanation: 'Pablo Picasso painted "Guernica" as a response to the bombing of the Basque town during the Spanish Civil War.'
            },
            {
              question: 'What is the technique of using light and shadow to create depth called?',
              options: ['Perspective', 'Chiaroscuro', 'Foreshortening', 'Sfumato'],
              correct: 1,
              explanation: 'Chiaroscuro is the technique of using strong contrasts between light and dark to create depth and volume.'
            }
          ],
          '5': [
            {
              question: 'Who is known as the "Father of Modern Art"?',
              options: ['Pablo Picasso', 'Paul Cézanne', 'Vincent van Gogh', 'Claude Monet'],
              correct: 1,
              explanation: 'Paul Cézanne is often called the "Father of Modern Art" for his influence on 20th-century art movements.'
            },
            {
              question: 'What is the technique of painting on glass called?',
              options: ['Stained glass', 'Glass painting', 'Vitreous painting', 'Enamel painting'],
              correct: 0,
              explanation: 'Stained glass is the technique of creating decorative windows by coloring glass with metallic oxides.'
            },
            {
              question: 'Which artist is known for his "Cut-Outs"?',
              options: ['Henri Matisse', 'Pablo Picasso', 'Georges Braque', 'Fernand Léger'],
              correct: 0,
              explanation: 'Henri Matisse is famous for his "Cut-Outs," created by cutting shapes from colored paper.'
            },
            {
              question: 'What is the technique of painting with egg yolk and pigment called?',
              options: ['Oil painting', 'Tempera', 'Fresco', 'Encaustic'],
              correct: 1,
              explanation: 'Tempera is the technique of painting with pigments mixed with egg yolk, used before the invention of oil paint.'
            },
            {
              question: 'Who painted "The Persistence of Memory"?',
              options: ['Salvador Dalí', 'René Magritte', 'Max Ernst', 'Yves Tanguy'],
              correct: 0,
              explanation: 'Salvador Dalí painted "The Persistence of Memory," featuring melting clocks in a dreamlike landscape.'
            }
          ]
        }
      },
      // Art & Culture Category - Multiple separate quizzes
    'accident-manual': {
        title: 'Accident Manual',
        description: 'Learn about accident manual with various topics',
        icon: '🎨',
        color: 'from-pink-500 to-pink-600',
        quizzes: {
          '1': [
            {
              question: 'Who painted the Mona Lisa?',
              options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
              correct: 1,
              explanation: 'Leonardo da Vinci painted the Mona Lisa, one of the most famous paintings in the world.'
            },
            {
              question: 'What is the primary color that is not a primary color of light?',
              options: ['Red', 'Blue', 'Yellow', 'Green'],
              correct: 2,
              explanation: 'Yellow is a primary color in painting but not in light. The primary colors of light are red, blue, and green.'
            },
            {
              question: 'Which art movement was characterized by bright colors and bold brushstrokes?',
              options: ['Impressionism', 'Cubism', 'Surrealism', 'Renaissance'],
              correct: 0,
              explanation: 'Impressionism was characterized by bright colors, bold brushstrokes, and capturing the effects of light.'
            },
            {
              question: 'What is the technique of painting on wet plaster called?',
              options: ['Oil painting', 'Watercolor', 'Fresco', 'Acrylic'],
              correct: 2,
              explanation: 'Fresco is the technique of painting on wet plaster, commonly used in Renaissance art.'
            },
            {
              question: 'Who is known for cutting off his own ear?',
              options: ['Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí', 'Claude Monet'],
              correct: 1,
              explanation: 'Vincent van Gogh is famously known for cutting off his own ear during a period of mental illness.'
            }
          ],
          '2': [
            {
              question: 'What is the name of the famous sculpture by Michelangelo?',
              options: ['The Thinker', 'David', 'Venus de Milo', 'The Kiss'],
              correct: 1,
              explanation: 'David is the famous marble sculpture by Michelangelo, depicting the biblical hero David.'
            },
            {
              question: 'Which artist is known for his "Blue Period"?',
              options: ['Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí', 'Henri Matisse'],
              correct: 0,
              explanation: 'Pablo Picasso is known for his "Blue Period," characterized by somber paintings in shades of blue.'
            },
            {
              question: 'What is the most famous painting by Edvard Munch?',
              options: ['The Scream', 'Starry Night', 'The Persistence of Memory', 'Guernica'],
              correct: 0,
              explanation: 'The Scream is the most famous painting by Edvard Munch, depicting a figure with an agonized expression.'
            },
            {
              question: 'Which art movement was founded by Salvador Dalí?',
              options: ['Cubism', 'Surrealism', 'Impressionism', 'Expressionism'],
              correct: 1,
              explanation: 'Salvador Dalí was a prominent figure in the Surrealism movement, known for his bizarre and dreamlike imagery.'
            },
            {
              question: 'What is the technique of using small dots to create an image called?',
              options: ['Pointillism', 'Impressionism', 'Cubism', 'Expressionism'],
              correct: 0,
              explanation: 'Pointillism is the technique of using small dots of color to create an image, developed by Georges Seurat.'
            }
          ],
          '3': [
            {
              question: 'Who painted "The Starry Night"?',
              options: ['Vincent van Gogh', 'Claude Monet', 'Pablo Picasso', 'Salvador Dalí'],
              correct: 0,
              explanation: 'Vincent van Gogh painted "The Starry Night" while staying at the Saint-Paul-de-Mausole asylum.'
            },
            {
              question: 'What is the most famous work by Leonardo da Vinci?',
              options: ['The Last Supper', 'Mona Lisa', 'Vitruvian Man', 'The Annunciation'],
              correct: 1,
              explanation: 'The Mona Lisa is Leonardo da Vinci\'s most famous work, known for its enigmatic smile.'
            },
            {
              question: 'Which artist is known for his "Campbell\'s Soup Cans"?',
              options: ['Andy Warhol', 'Roy Lichtenstein', 'Jasper Johns', 'Robert Rauschenberg'],
              correct: 0,
              explanation: 'Andy Warhol is famous for his "Campbell\'s Soup Cans" series, which became an icon of Pop Art.'
            },
            {
              question: 'What is the technique of painting with water-soluble pigments called?',
              options: ['Oil painting', 'Watercolor', 'Acrylic', 'Tempera'],
              correct: 1,
              explanation: 'Watercolor is the technique of painting with water-soluble pigments on paper or other absorbent surfaces.'
            },
            {
              question: 'Who sculpted "The Thinker"?',
              options: ['Auguste Rodin', 'Michelangelo', 'Donatello', 'Bernini'],
              correct: 0,
              explanation: 'Auguste Rodin sculpted "The Thinker," originally part of his larger work "The Gates of Hell."'
            }
          ],
          '4': [
            {
              question: 'What is the most famous painting by Claude Monet?',
              options: ['Water Lilies', 'Impression, Sunrise', 'Haystacks', 'Rouen Cathedral'],
              correct: 1,
              explanation: 'Impression, Sunrise by Claude Monet gave the Impressionist movement its name.'
            },
            {
              question: 'Which artist is known for his "Drip Painting" technique?',
              options: ['Jackson Pollock', 'Mark Rothko', 'Willem de Kooning', 'Franz Kline'],
              correct: 0,
              explanation: 'Jackson Pollock is famous for his "Drip Painting" technique, where he poured paint onto canvas.'
            },
            {
              question: 'What is the technique of carving into a surface to create an image called?',
              options: ['Sculpture', 'Engraving', 'Etching', 'Relief'],
              correct: 1,
              explanation: 'Engraving is the technique of carving or incising a design into a hard surface.'
            },
            {
              question: 'Who painted "Guernica"?',
              options: ['Pablo Picasso', 'Salvador Dalí', 'Joan Miró', 'Fernand Léger'],
              correct: 0,
              explanation: 'Pablo Picasso painted "Guernica" as a response to the bombing of the Basque town during the Spanish Civil War.'
            },
            {
              question: 'What is the technique of using light and shadow to create depth called?',
              options: ['Perspective', 'Chiaroscuro', 'Foreshortening', 'Sfumato'],
              correct: 1,
              explanation: 'Chiaroscuro is the technique of using strong contrasts between light and dark to create depth and volume.'
            }
          ],
          '5': [
            {
              question: 'Who is known as the "Father of Modern Art"?',
              options: ['Pablo Picasso', 'Paul Cézanne', 'Vincent van Gogh', 'Claude Monet'],
              correct: 1,
              explanation: 'Paul Cézanne is often called the "Father of Modern Art" for his influence on 20th-century art movements.'
            },
            {
              question: 'What is the technique of painting on glass called?',
              options: ['Stained glass', 'Glass painting', 'Vitreous painting', 'Enamel painting'],
              correct: 0,
              explanation: 'Stained glass is the technique of creating decorative windows by coloring glass with metallic oxides.'
            },
            {
              question: 'Which artist is known for his "Cut-Outs"?',
              options: ['Henri Matisse', 'Pablo Picasso', 'Georges Braque', 'Fernand Léger'],
              correct: 0,
              explanation: 'Henri Matisse is famous for his "Cut-Outs," created by cutting shapes from colored paper.'
            },
            {
              question: 'What is the technique of painting with egg yolk and pigment called?',
              options: ['Oil painting', 'Tempera', 'Fresco', 'Encaustic'],
              correct: 1,
              explanation: 'Tempera is the technique of painting with pigments mixed with egg yolk, used before the invention of oil paint.'
            },
            {
              question: 'Who painted "The Persistence of Memory"?',
              options: ['Salvador Dalí', 'René Magritte', 'Max Ernst', 'Yves Tanguy'],
              correct: 0,
              explanation: 'Salvador Dalí painted "The Persistence of Memory," featuring melting clocks in a dreamlike landscape.'
            }
          ]
        }
      },
      // Art & Culture Category - Multiple separate quizzes
    'bwm': {
        title: 'Block Working Manual',
        description: 'Learn about block working manual with various topics',
        icon: '🎨',
        color: 'from-pink-500 to-pink-600',
        quizzes: {
          '1': [
            {
              question: 'Who painted the Mona Lisa?',
              options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
              correct: 1,
              explanation: 'Leonardo da Vinci painted the Mona Lisa, one of the most famous paintings in the world.'
            },
            {
              question: 'What is the primary color that is not a primary color of light?',
              options: ['Red', 'Blue', 'Yellow', 'Green'],
              correct: 2,
              explanation: 'Yellow is a primary color in painting but not in light. The primary colors of light are red, blue, and green.'
            },
            {
              question: 'Which art movement was characterized by bright colors and bold brushstrokes?',
              options: ['Impressionism', 'Cubism', 'Surrealism', 'Renaissance'],
              correct: 0,
              explanation: 'Impressionism was characterized by bright colors, bold brushstrokes, and capturing the effects of light.'
            },
            {
              question: 'What is the technique of painting on wet plaster called?',
              options: ['Oil painting', 'Watercolor', 'Fresco', 'Acrylic'],
              correct: 2,
              explanation: 'Fresco is the technique of painting on wet plaster, commonly used in Renaissance art.'
            },
            {
              question: 'Who is known for cutting off his own ear?',
              options: ['Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí', 'Claude Monet'],
              correct: 1,
              explanation: 'Vincent van Gogh is famously known for cutting off his own ear during a period of mental illness.'
            }
          ],
          '2': [
            {
              question: 'What is the name of the famous sculpture by Michelangelo?',
              options: ['The Thinker', 'David', 'Venus de Milo', 'The Kiss'],
              correct: 1,
              explanation: 'David is the famous marble sculpture by Michelangelo, depicting the biblical hero David.'
            },
            {
              question: 'Which artist is known for his "Blue Period"?',
              options: ['Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí', 'Henri Matisse'],
              correct: 0,
              explanation: 'Pablo Picasso is known for his "Blue Period," characterized by somber paintings in shades of blue.'
            },
            {
              question: 'What is the most famous painting by Edvard Munch?',
              options: ['The Scream', 'Starry Night', 'The Persistence of Memory', 'Guernica'],
              correct: 0,
              explanation: 'The Scream is the most famous painting by Edvard Munch, depicting a figure with an agonized expression.'
            },
            {
              question: 'Which art movement was founded by Salvador Dalí?',
              options: ['Cubism', 'Surrealism', 'Impressionism', 'Expressionism'],
              correct: 1,
              explanation: 'Salvador Dalí was a prominent figure in the Surrealism movement, known for his bizarre and dreamlike imagery.'
            },
            {
              question: 'What is the technique of using small dots to create an image called?',
              options: ['Pointillism', 'Impressionism', 'Cubism', 'Expressionism'],
              correct: 0,
              explanation: 'Pointillism is the technique of using small dots of color to create an image, developed by Georges Seurat.'
            }
          ],
          '3': [
            {
              question: 'Who painted "The Starry Night"?',
              options: ['Vincent van Gogh', 'Claude Monet', 'Pablo Picasso', 'Salvador Dalí'],
              correct: 0,
              explanation: 'Vincent van Gogh painted "The Starry Night" while staying at the Saint-Paul-de-Mausole asylum.'
            },
            {
              question: 'What is the most famous work by Leonardo da Vinci?',
              options: ['The Last Supper', 'Mona Lisa', 'Vitruvian Man', 'The Annunciation'],
              correct: 1,
              explanation: 'The Mona Lisa is Leonardo da Vinci\'s most famous work, known for its enigmatic smile.'
            },
            {
              question: 'Which artist is known for his "Campbell\'s Soup Cans"?',
              options: ['Andy Warhol', 'Roy Lichtenstein', 'Jasper Johns', 'Robert Rauschenberg'],
              correct: 0,
              explanation: 'Andy Warhol is famous for his "Campbell\'s Soup Cans" series, which became an icon of Pop Art.'
            },
            {
              question: 'What is the technique of painting with water-soluble pigments called?',
              options: ['Oil painting', 'Watercolor', 'Acrylic', 'Tempera'],
              correct: 1,
              explanation: 'Watercolor is the technique of painting with water-soluble pigments on paper or other absorbent surfaces.'
            },
            {
              question: 'Who sculpted "The Thinker"?',
              options: ['Auguste Rodin', 'Michelangelo', 'Donatello', 'Bernini'],
              correct: 0,
              explanation: 'Auguste Rodin sculpted "The Thinker," originally part of his larger work "The Gates of Hell."'
            }
          ],
          '4': [
            {
              question: 'What is the most famous painting by Claude Monet?',
              options: ['Water Lilies', 'Impression, Sunrise', 'Haystacks', 'Rouen Cathedral'],
              correct: 1,
              explanation: 'Impression, Sunrise by Claude Monet gave the Impressionist movement its name.'
            },
            {
              question: 'Which artist is known for his "Drip Painting" technique?',
              options: ['Jackson Pollock', 'Mark Rothko', 'Willem de Kooning', 'Franz Kline'],
              correct: 0,
              explanation: 'Jackson Pollock is famous for his "Drip Painting" technique, where he poured paint onto canvas.'
            },
            {
              question: 'What is the technique of carving into a surface to create an image called?',
              options: ['Sculpture', 'Engraving', 'Etching', 'Relief'],
              correct: 1,
              explanation: 'Engraving is the technique of carving or incising a design into a hard surface.'
            },
            {
              question: 'Who painted "Guernica"?',
              options: ['Pablo Picasso', 'Salvador Dalí', 'Joan Miró', 'Fernand Léger'],
              correct: 0,
              explanation: 'Pablo Picasso painted "Guernica" as a response to the bombing of the Basque town during the Spanish Civil War.'
            },
            {
              question: 'What is the technique of using light and shadow to create depth called?',
              options: ['Perspective', 'Chiaroscuro', 'Foreshortening', 'Sfumato'],
              correct: 1,
              explanation: 'Chiaroscuro is the technique of using strong contrasts between light and dark to create depth and volume.'
            }
          ],
          '5': [
            {
              question: 'Who is known as the "Father of Modern Art"?',
              options: ['Pablo Picasso', 'Paul Cézanne', 'Vincent van Gogh', 'Claude Monet'],
              correct: 1,
              explanation: 'Paul Cézanne is often called the "Father of Modern Art" for his influence on 20th-century art movements.'
            },
            {
              question: 'What is the technique of painting on glass called?',
              options: ['Stained glass', 'Glass painting', 'Vitreous painting', 'Enamel painting'],
              correct: 0,
              explanation: 'Stained glass is the technique of creating decorative windows by coloring glass with metallic oxides.'
            },
            {
              question: 'Which artist is known for his "Cut-Outs"?',
              options: ['Henri Matisse', 'Pablo Picasso', 'Georges Braque', 'Fernand Léger'],
              correct: 0,
              explanation: 'Henri Matisse is famous for his "Cut-Outs," created by cutting shapes from colored paper.'
            },
            {
              question: 'What is the technique of painting with egg yolk and pigment called?',
              options: ['Oil painting', 'Tempera', 'Fresco', 'Encaustic'],
              correct: 1,
              explanation: 'Tempera is the technique of painting with pigments mixed with egg yolk, used before the invention of oil paint.'
            },
            {
              question: 'Who painted "The Persistence of Memory"?',
              options: ['Salvador Dalí', 'René Magritte', 'Max Ernst', 'Yves Tanguy'],
              correct: 0,
              explanation: 'Salvador Dalí painted "The Persistence of Memory," featuring melting clocks in a dreamlike landscape.'
            }
          ]
        }
      },
      // Art & Culture Category - Multiple separate quizzes
    'rajbhasha': {
        title: 'Rajbhasha',
        description: 'Learn about rajbhasha with various topics',
        icon: '🎨',
        color: 'from-pink-500 to-pink-600',
        quizzes: {
          '1': [
            {
              question: 'Who painted the Mona Lisa?',
              options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
              correct: 1,
              explanation: 'Leonardo da Vinci painted the Mona Lisa, one of the most famous paintings in the world.'
            },
            {
              question: 'What is the primary color that is not a primary color of light?',
              options: ['Red', 'Blue', 'Yellow', 'Green'],
              correct: 2,
              explanation: 'Yellow is a primary color in painting but not in light. The primary colors of light are red, blue, and green.'
            },
            {
              question: 'Which art movement was characterized by bright colors and bold brushstrokes?',
              options: ['Impressionism', 'Cubism', 'Surrealism', 'Renaissance'],
              correct: 0,
              explanation: 'Impressionism was characterized by bright colors, bold brushstrokes, and capturing the effects of light.'
            },
            {
              question: 'What is the technique of painting on wet plaster called?',
              options: ['Oil painting', 'Watercolor', 'Fresco', 'Acrylic'],
              correct: 2,
              explanation: 'Fresco is the technique of painting on wet plaster, commonly used in Renaissance art.'
            },
            {
              question: 'Who is known for cutting off his own ear?',
              options: ['Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí', 'Claude Monet'],
              correct: 1,
              explanation: 'Vincent van Gogh is famously known for cutting off his own ear during a period of mental illness.'
            }
          ],
          '2': [
            {
              question: 'What is the name of the famous sculpture by Michelangelo?',
              options: ['The Thinker', 'David', 'Venus de Milo', 'The Kiss'],
              correct: 1,
              explanation: 'David is the famous marble sculpture by Michelangelo, depicting the biblical hero David.'
            },
            {
              question: 'Which artist is known for his "Blue Period"?',
              options: ['Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí', 'Henri Matisse'],
              correct: 0,
              explanation: 'Pablo Picasso is known for his "Blue Period," characterized by somber paintings in shades of blue.'
            },
            {
              question: 'What is the most famous painting by Edvard Munch?',
              options: ['The Scream', 'Starry Night', 'The Persistence of Memory', 'Guernica'],
              correct: 0,
              explanation: 'The Scream is the most famous painting by Edvard Munch, depicting a figure with an agonized expression.'
            },
            {
              question: 'Which art movement was founded by Salvador Dalí?',
              options: ['Cubism', 'Surrealism', 'Impressionism', 'Expressionism'],
              correct: 1,
              explanation: 'Salvador Dalí was a prominent figure in the Surrealism movement, known for his bizarre and dreamlike imagery.'
            },
            {
              question: 'What is the technique of using small dots to create an image called?',
              options: ['Pointillism', 'Impressionism', 'Cubism', 'Expressionism'],
              correct: 0,
              explanation: 'Pointillism is the technique of using small dots of color to create an image, developed by Georges Seurat.'
            }
          ],
          '3': [
            {
              question: 'Who painted "The Starry Night"?',
              options: ['Vincent van Gogh', 'Claude Monet', 'Pablo Picasso', 'Salvador Dalí'],
              correct: 0,
              explanation: 'Vincent van Gogh painted "The Starry Night" while staying at the Saint-Paul-de-Mausole asylum.'
            },
            {
              question: 'What is the most famous work by Leonardo da Vinci?',
              options: ['The Last Supper', 'Mona Lisa', 'Vitruvian Man', 'The Annunciation'],
              correct: 1,
              explanation: 'The Mona Lisa is Leonardo da Vinci\'s most famous work, known for its enigmatic smile.'
            },
            {
              question: 'Which artist is known for his "Campbell\'s Soup Cans"?',
              options: ['Andy Warhol', 'Roy Lichtenstein', 'Jasper Johns', 'Robert Rauschenberg'],
              correct: 0,
              explanation: 'Andy Warhol is famous for his "Campbell\'s Soup Cans" series, which became an icon of Pop Art.'
            },
            {
              question: 'What is the technique of painting with water-soluble pigments called?',
              options: ['Oil painting', 'Watercolor', 'Acrylic', 'Tempera'],
              correct: 1,
              explanation: 'Watercolor is the technique of painting with water-soluble pigments on paper or other absorbent surfaces.'
            },
            {
              question: 'Who sculpted "The Thinker"?',
              options: ['Auguste Rodin', 'Michelangelo', 'Donatello', 'Bernini'],
              correct: 0,
              explanation: 'Auguste Rodin sculpted "The Thinker," originally part of his larger work "The Gates of Hell."'
            }
          ],
          '4': [
            {
              question: 'What is the most famous painting by Claude Monet?',
              options: ['Water Lilies', 'Impression, Sunrise', 'Haystacks', 'Rouen Cathedral'],
              correct: 1,
              explanation: 'Impression, Sunrise by Claude Monet gave the Impressionist movement its name.'
            },
            {
              question: 'Which artist is known for his "Drip Painting" technique?',
              options: ['Jackson Pollock', 'Mark Rothko', 'Willem de Kooning', 'Franz Kline'],
              correct: 0,
              explanation: 'Jackson Pollock is famous for his "Drip Painting" technique, where he poured paint onto canvas.'
            },
            {
              question: 'What is the technique of carving into a surface to create an image called?',
              options: ['Sculpture', 'Engraving', 'Etching', 'Relief'],
              correct: 1,
              explanation: 'Engraving is the technique of carving or incising a design into a hard surface.'
            },
            {
              question: 'Who painted "Guernica"?',
              options: ['Pablo Picasso', 'Salvador Dalí', 'Joan Miró', 'Fernand Léger'],
              correct: 0,
              explanation: 'Pablo Picasso painted "Guernica" as a response to the bombing of the Basque town during the Spanish Civil War.'
            },
            {
              question: 'What is the technique of using light and shadow to create depth called?',
              options: ['Perspective', 'Chiaroscuro', 'Foreshortening', 'Sfumato'],
              correct: 1,
              explanation: 'Chiaroscuro is the technique of using strong contrasts between light and dark to create depth and volume.'
            }
          ],
          '5': [
            {
              question: 'Who is known as the "Father of Modern Art"?',
              options: ['Pablo Picasso', 'Paul Cézanne', 'Vincent van Gogh', 'Claude Monet'],
              correct: 1,
              explanation: 'Paul Cézanne is often called the "Father of Modern Art" for his influence on 20th-century art movements.'
            },
            {
              question: 'What is the technique of painting on glass called?',
              options: ['Stained glass', 'Glass painting', 'Vitreous painting', 'Enamel painting'],
              correct: 0,
              explanation: 'Stained glass is the technique of creating decorative windows by coloring glass with metallic oxides.'
            },
            {
              question: 'Which artist is known for his "Cut-Outs"?',
              options: ['Henri Matisse', 'Pablo Picasso', 'Georges Braque', 'Fernand Léger'],
              correct: 0,
              explanation: 'Henri Matisse is famous for his "Cut-Outs," created by cutting shapes from colored paper.'
            },
            {
              question: 'What is the technique of painting with egg yolk and pigment called?',
              options: ['Oil painting', 'Tempera', 'Fresco', 'Encaustic'],
              correct: 1,
              explanation: 'Tempera is the technique of painting with pigments mixed with egg yolk, used before the invention of oil paint.'
            },
            {
              question: 'Who painted "The Persistence of Memory"?',
              options: ['Salvador Dalí', 'René Magritte', 'Max Ernst', 'Yves Tanguy'],
              correct: 0,
              explanation: 'Salvador Dalí painted "The Persistence of Memory," featuring melting clocks in a dreamlike landscape.'
            }
          ]
        }
      },
      // Art & Culture Category - Multiple separate quizzes
    'finance': {
        title: 'Finance',
        description: 'Learn about finance with various topics',
        icon: '🎨',
        color: 'from-pink-500 to-pink-600',
        quizzes: {
          '1': [
            {
              question: 'Who painted the Mona Lisa?',
              options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
              correct: 1,
              explanation: 'Leonardo da Vinci painted the Mona Lisa, one of the most famous paintings in the world.'
            },
            {
              question: 'What is the primary color that is not a primary color of light?',
              options: ['Red', 'Blue', 'Yellow', 'Green'],
              correct: 2,
              explanation: 'Yellow is a primary color in painting but not in light. The primary colors of light are red, blue, and green.'
            },
            {
              question: 'Which art movement was characterized by bright colors and bold brushstrokes?',
              options: ['Impressionism', 'Cubism', 'Surrealism', 'Renaissance'],
              correct: 0,
              explanation: 'Impressionism was characterized by bright colors, bold brushstrokes, and capturing the effects of light.'
            },
            {
              question: 'What is the technique of painting on wet plaster called?',
              options: ['Oil painting', 'Watercolor', 'Fresco', 'Acrylic'],
              correct: 2,
              explanation: 'Fresco is the technique of painting on wet plaster, commonly used in Renaissance art.'
            },
            {
              question: 'Who is known for cutting off his own ear?',
              options: ['Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí', 'Claude Monet'],
              correct: 1,
              explanation: 'Vincent van Gogh is famously known for cutting off his own ear during a period of mental illness.'
            }
          ],
          '2': [
            {
              question: 'What is the name of the famous sculpture by Michelangelo?',
              options: ['The Thinker', 'David', 'Venus de Milo', 'The Kiss'],
              correct: 1,
              explanation: 'David is the famous marble sculpture by Michelangelo, depicting the biblical hero David.'
            },
            {
              question: 'Which artist is known for his "Blue Period"?',
              options: ['Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí', 'Henri Matisse'],
              correct: 0,
              explanation: 'Pablo Picasso is known for his "Blue Period," characterized by somber paintings in shades of blue.'
            },
            {
              question: 'What is the most famous painting by Edvard Munch?',
              options: ['The Scream', 'Starry Night', 'The Persistence of Memory', 'Guernica'],
              correct: 0,
              explanation: 'The Scream is the most famous painting by Edvard Munch, depicting a figure with an agonized expression.'
            },
            {
              question: 'Which art movement was founded by Salvador Dalí?',
              options: ['Cubism', 'Surrealism', 'Impressionism', 'Expressionism'],
              correct: 1,
              explanation: 'Salvador Dalí was a prominent figure in the Surrealism movement, known for his bizarre and dreamlike imagery.'
            },
            {
              question: 'What is the technique of using small dots to create an image called?',
              options: ['Pointillism', 'Impressionism', 'Cubism', 'Expressionism'],
              correct: 0,
              explanation: 'Pointillism is the technique of using small dots of color to create an image, developed by Georges Seurat.'
            }
          ],
          '3': [
            {
              question: 'Who painted "The Starry Night"?',
              options: ['Vincent van Gogh', 'Claude Monet', 'Pablo Picasso', 'Salvador Dalí'],
              correct: 0,
              explanation: 'Vincent van Gogh painted "The Starry Night" while staying at the Saint-Paul-de-Mausole asylum.'
            },
            {
              question: 'What is the most famous work by Leonardo da Vinci?',
              options: ['The Last Supper', 'Mona Lisa', 'Vitruvian Man', 'The Annunciation'],
              correct: 1,
              explanation: 'The Mona Lisa is Leonardo da Vinci\'s most famous work, known for its enigmatic smile.'
            },
            {
              question: 'Which artist is known for his "Campbell\'s Soup Cans"?',
              options: ['Andy Warhol', 'Roy Lichtenstein', 'Jasper Johns', 'Robert Rauschenberg'],
              correct: 0,
              explanation: 'Andy Warhol is famous for his "Campbell\'s Soup Cans" series, which became an icon of Pop Art.'
            },
            {
              question: 'What is the technique of painting with water-soluble pigments called?',
              options: ['Oil painting', 'Watercolor', 'Acrylic', 'Tempera'],
              correct: 1,
              explanation: 'Watercolor is the technique of painting with water-soluble pigments on paper or other absorbent surfaces.'
            },
            {
              question: 'Who sculpted "The Thinker"?',
              options: ['Auguste Rodin', 'Michelangelo', 'Donatello', 'Bernini'],
              correct: 0,
              explanation: 'Auguste Rodin sculpted "The Thinker," originally part of his larger work "The Gates of Hell."'
            }
          ],
          '4': [
            {
              question: 'What is the most famous painting by Claude Monet?',
              options: ['Water Lilies', 'Impression, Sunrise', 'Haystacks', 'Rouen Cathedral'],
              correct: 1,
              explanation: 'Impression, Sunrise by Claude Monet gave the Impressionist movement its name.'
            },
            {
              question: 'Which artist is known for his "Drip Painting" technique?',
              options: ['Jackson Pollock', 'Mark Rothko', 'Willem de Kooning', 'Franz Kline'],
              correct: 0,
              explanation: 'Jackson Pollock is famous for his "Drip Painting" technique, where he poured paint onto canvas.'
            },
            {
              question: 'What is the technique of carving into a surface to create an image called?',
              options: ['Sculpture', 'Engraving', 'Etching', 'Relief'],
              correct: 1,
              explanation: 'Engraving is the technique of carving or incising a design into a hard surface.'
            },
            {
              question: 'Who painted "Guernica"?',
              options: ['Pablo Picasso', 'Salvador Dalí', 'Joan Miró', 'Fernand Léger'],
              correct: 0,
              explanation: 'Pablo Picasso painted "Guernica" as a response to the bombing of the Basque town during the Spanish Civil War.'
            },
            {
              question: 'What is the technique of using light and shadow to create depth called?',
              options: ['Perspective', 'Chiaroscuro', 'Foreshortening', 'Sfumato'],
              correct: 1,
              explanation: 'Chiaroscuro is the technique of using strong contrasts between light and dark to create depth and volume.'
            }
          ],
          '5': [
            {
              question: 'Who is known as the "Father of Modern Art"?',
              options: ['Pablo Picasso', 'Paul Cézanne', 'Vincent van Gogh', 'Claude Monet'],
              correct: 1,
              explanation: 'Paul Cézanne is often called the "Father of Modern Art" for his influence on 20th-century art movements.'
            },
            {
              question: 'What is the technique of painting on glass called?',
              options: ['Stained glass', 'Glass painting', 'Vitreous painting', 'Enamel painting'],
              correct: 0,
              explanation: 'Stained glass is the technique of creating decorative windows by coloring glass with metallic oxides.'
            },
            {
              question: 'Which artist is known for his "Cut-Outs"?',
              options: ['Henri Matisse', 'Pablo Picasso', 'Georges Braque', 'Fernand Léger'],
              correct: 0,
              explanation: 'Henri Matisse is famous for his "Cut-Outs," created by cutting shapes from colored paper.'
            },
            {
              question: 'What is the technique of painting with egg yolk and pigment called?',
              options: ['Oil painting', 'Tempera', 'Fresco', 'Encaustic'],
              correct: 1,
              explanation: 'Tempera is the technique of painting with pigments mixed with egg yolk, used before the invention of oil paint.'
            },
            {
              question: 'Who painted "The Persistence of Memory"?',
              options: ['Salvador Dalí', 'René Magritte', 'Max Ernst', 'Yves Tanguy'],
              correct: 0,
              explanation: 'Salvador Dalí painted "The Persistence of Memory," featuring melting clocks in a dreamlike landscape.'
            }
          ]
        }
      },
      // Art & Culture Category - Multiple separate quizzes
    'rgk': {
        title: 'Railway GK',
        description: 'Learn about railway gk with various topics',
        icon: '🎨',
        color: 'from-pink-500 to-pink-600',
        quizzes: {
          '1': [
            {
              question: 'Who painted the Mona Lisa?',
              options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
              correct: 1,
              explanation: 'Leonardo da Vinci painted the Mona Lisa, one of the most famous paintings in the world.'
            },
            {
              question: 'What is the primary color that is not a primary color of light?',
              options: ['Red', 'Blue', 'Yellow', 'Green'],
              correct: 2,
              explanation: 'Yellow is a primary color in painting but not in light. The primary colors of light are red, blue, and green.'
            },
            {
              question: 'Which art movement was characterized by bright colors and bold brushstrokes?',
              options: ['Impressionism', 'Cubism', 'Surrealism', 'Renaissance'],
              correct: 0,
              explanation: 'Impressionism was characterized by bright colors, bold brushstrokes, and capturing the effects of light.'
            },
            {
              question: 'What is the technique of painting on wet plaster called?',
              options: ['Oil painting', 'Watercolor', 'Fresco', 'Acrylic'],
              correct: 2,
              explanation: 'Fresco is the technique of painting on wet plaster, commonly used in Renaissance art.'
            },
            {
              question: 'Who is known for cutting off his own ear?',
              options: ['Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí', 'Claude Monet'],
              correct: 1,
              explanation: 'Vincent van Gogh is famously known for cutting off his own ear during a period of mental illness.'
            }
          ],
          '2': [
            {
              question: 'What is the name of the famous sculpture by Michelangelo?',
              options: ['The Thinker', 'David', 'Venus de Milo', 'The Kiss'],
              correct: 1,
              explanation: 'David is the famous marble sculpture by Michelangelo, depicting the biblical hero David.'
            },
            {
              question: 'Which artist is known for his "Blue Period"?',
              options: ['Pablo Picasso', 'Vincent van Gogh', 'Salvador Dalí', 'Henri Matisse'],
              correct: 0,
              explanation: 'Pablo Picasso is known for his "Blue Period," characterized by somber paintings in shades of blue.'
            },
            {
              question: 'What is the most famous painting by Edvard Munch?',
              options: ['The Scream', 'Starry Night', 'The Persistence of Memory', 'Guernica'],
              correct: 0,
              explanation: 'The Scream is the most famous painting by Edvard Munch, depicting a figure with an agonized expression.'
            },
            {
              question: 'Which art movement was founded by Salvador Dalí?',
              options: ['Cubism', 'Surrealism', 'Impressionism', 'Expressionism'],
              correct: 1,
              explanation: 'Salvador Dalí was a prominent figure in the Surrealism movement, known for his bizarre and dreamlike imagery.'
            },
            {
              question: 'What is the technique of using small dots to create an image called?',
              options: ['Pointillism', 'Impressionism', 'Cubism', 'Expressionism'],
              correct: 0,
              explanation: 'Pointillism is the technique of using small dots of color to create an image, developed by Georges Seurat.'
            }
          ],
          '3': [
            {
              question: 'Who painted "The Starry Night"?',
              options: ['Vincent van Gogh', 'Claude Monet', 'Pablo Picasso', 'Salvador Dalí'],
              correct: 0,
              explanation: 'Vincent van Gogh painted "The Starry Night" while staying at the Saint-Paul-de-Mausole asylum.'
            },
            {
              question: 'What is the most famous work by Leonardo da Vinci?',
              options: ['The Last Supper', 'Mona Lisa', 'Vitruvian Man', 'The Annunciation'],
              correct: 1,
              explanation: 'The Mona Lisa is Leonardo da Vinci\'s most famous work, known for its enigmatic smile.'
            },
            {
              question: 'Which artist is known for his "Campbell\'s Soup Cans"?',
              options: ['Andy Warhol', 'Roy Lichtenstein', 'Jasper Johns', 'Robert Rauschenberg'],
              correct: 0,
              explanation: 'Andy Warhol is famous for his "Campbell\'s Soup Cans" series, which became an icon of Pop Art.'
            },
            {
              question: 'What is the technique of painting with water-soluble pigments called?',
              options: ['Oil painting', 'Watercolor', 'Acrylic', 'Tempera'],
              correct: 1,
              explanation: 'Watercolor is the technique of painting with water-soluble pigments on paper or other absorbent surfaces.'
            },
            {
              question: 'Who sculpted "The Thinker"?',
              options: ['Auguste Rodin', 'Michelangelo', 'Donatello', 'Bernini'],
              correct: 0,
              explanation: 'Auguste Rodin sculpted "The Thinker," originally part of his larger work "The Gates of Hell."'
            }
          ],
          '4': [
            {
              question: 'What is the most famous painting by Claude Monet?',
              options: ['Water Lilies', 'Impression, Sunrise', 'Haystacks', 'Rouen Cathedral'],
              correct: 1,
              explanation: 'Impression, Sunrise by Claude Monet gave the Impressionist movement its name.'
            },
            {
              question: 'Which artist is known for his "Drip Painting" technique?',
              options: ['Jackson Pollock', 'Mark Rothko', 'Willem de Kooning', 'Franz Kline'],
              correct: 0,
              explanation: 'Jackson Pollock is famous for his "Drip Painting" technique, where he poured paint onto canvas.'
            },
            {
              question: 'What is the technique of carving into a surface to create an image called?',
              options: ['Sculpture', 'Engraving', 'Etching', 'Relief'],
              correct: 1,
              explanation: 'Engraving is the technique of carving or incising a design into a hard surface.'
            },
            {
              question: 'Who painted "Guernica"?',
              options: ['Pablo Picasso', 'Salvador Dalí', 'Joan Miró', 'Fernand Léger'],
              correct: 0,
              explanation: 'Pablo Picasso painted "Guernica" as a response to the bombing of the Basque town during the Spanish Civil War.'
            },
            {
              question: 'What is the technique of using light and shadow to create depth called?',
              options: ['Perspective', 'Chiaroscuro', 'Foreshortening', 'Sfumato'],
              correct: 1,
              explanation: 'Chiaroscuro is the technique of using strong contrasts between light and dark to create depth and volume.'
            }
          ],
          '5': [
            {
              question: 'Who is known as the "Father of Modern Art"?',
              options: ['Pablo Picasso', 'Paul Cézanne', 'Vincent van Gogh', 'Claude Monet'],
              correct: 1,
              explanation: 'Paul Cézanne is often called the "Father of Modern Art" for his influence on 20th-century art movements.'
            },
            {
              question: 'What is the technique of painting on glass called?',
              options: ['Stained glass', 'Glass painting', 'Vitreous painting', 'Enamel painting'],
              correct: 0,
              explanation: 'Stained glass is the technique of creating decorative windows by coloring glass with metallic oxides.'
            },
            {
              question: 'Which artist is known for his "Cut-Outs"?',
              options: ['Henri Matisse', 'Pablo Picasso', 'Georges Braque', 'Fernand Léger'],
              correct: 0,
              explanation: 'Henri Matisse is famous for his "Cut-Outs," created by cutting shapes from colored paper.'
            },
            {
              question: 'What is the technique of painting with egg yolk and pigment called?',
              options: ['Oil painting', 'Tempera', 'Fresco', 'Encaustic'],
              correct: 1,
              explanation: 'Tempera is the technique of painting with pigments mixed with egg yolk, used before the invention of oil paint.'
            },
            {
              question: 'Who painted "The Persistence of Memory"?',
              options: ['Salvador Dalí', 'René Magritte', 'Max Ernst', 'Yves Tanguy'],
              correct: 0,
              explanation: 'Salvador Dalí painted "The Persistence of Memory," featuring melting clocks in a dreamlike landscape.'
            }
          ]
        }
      }
  };