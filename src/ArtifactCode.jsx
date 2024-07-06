import React, { useState } from 'react';
import { ChevronDown, Heart, Copy, Download, Search, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const DogNameGenerator = () => {
  const [gender, setGender] = useState('');
  const [startLetter, setStartLetter] = useState('');
  const [theme, setTheme] = useState('');
  const [orderBy, setOrderBy] = useState('popular');
  const [nameLength, setNameLength] = useState('any');
  const [generatedNames, setGeneratedNames] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [email, setEmail] = useState('');

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const themes = ['Popular', 'Unique', 'Mythology', 'Nature', 'Food', 'Colors', 'Space', 'Literature', 'Music', 'Sports'];

  // 扩展的狗狗名字数据库
  const dogNameDatabase = {
    male: [
      { name: 'Max', reason: 'Short for Maximum, implies greatness.', theme: 'Popular' },
      { name: 'Charlie', reason: 'Classic and charming.', theme: 'Popular' },
      { name: 'Cooper', reason: 'Cheerful and energetic.', theme: 'Popular' },
      // ... 其他男性狗狗名字 ...
      { name: 'Aaron', reason: '', theme: '' },
      { name: 'Adam', reason: '', theme: '' },
      { name: 'Adrian', reason: '', theme: '' },
      { name: 'Alan', reason: '', theme: '' },
      { name: 'Albert', reason: '', theme: '' },
      { name: 'Alexander', reason: '', theme: '' },
      { name: 'Alfred', reason: '', theme: '' },
      { name: 'Andrew', reason: '', theme: '' },
      { name: 'Anthony', reason: '', theme: '' },
      { name: 'Arthur', reason: '', theme: '' },
      { name: 'Bailey', reason: '', theme: '' },
      { name: 'Barry', reason: '', theme: '' },
      { name: 'Beau', reason: '', theme: '' },
      { name: 'Benjamin', reason: '', theme: '' },
      { name: 'Bennett', reason: '', theme: '' },
      { name: 'Bernard', reason: '', theme: '' },
      { name: 'Blake', reason: '', theme: '' },
      { name: 'Bradley', reason: '', theme: '' },
      { name: 'Brandon', reason: '', theme: '' },
      { name: 'Brian', reason: '', theme: '' },
      { name: 'Caleb', reason: '', theme: '' },
      { name: 'Calvin', reason: '', theme: '' },
      { name: 'Cameron', reason: '', theme: '' },
      { name: 'Carl', reason: '', theme: '' },
      { name: 'Charles', reason: '', theme: '' },
      { name: 'Chris', reason: '', theme: '' },
      { name: 'Christian', reason: '', theme: '' },
      { name: 'Christopher', reason: '', theme: '' },
      { name: 'Clarence', reason: '', theme: '' },
      { name: 'Connor', reason: '', theme: '' },
      { name: 'Dale', reason: '', theme: '' },
      { name: 'Damian', reason: '', theme: '' },
      { name: 'Daniel', reason: '', theme: '' },
      { name: 'David', reason: '', theme: '' },
      { name: 'Dean', reason: '', theme: '' },
      { name: 'Dennis', reason: '', theme: '' },
      { name: 'Derek', reason: '', theme: '' },
      { name: 'Dominic', reason: '', theme: '' },
      { name: 'Donald', reason: '', theme: '' },
      { name: 'Douglas', reason: '', theme: '' },
      { name: 'Earl', reason: '', theme: '' },
      { name: 'Edgar', reason: '', theme: '' },
      { name: 'Edward', reason: '', theme: '' },
      { name: 'Elijah', reason: '', theme: '' },
      { name: 'Elliot', reason: '', theme: '' },
      { name: 'Ellis', reason: '', theme: '' },
      { name: 'Emmett', reason: '', theme: '' },
      { name: 'Eric', reason: '', theme: '' },
      { name: 'Ethan', reason: '', theme: '' },
      { name: 'Evan', reason: '', theme: '' },
      { name: 'Fabian', reason: '', theme: '' },
      { name: 'Felix', reason: '', theme: '' },
      { name: 'Finn', reason: '', theme: '' },
      { name: 'Francis', reason: '', theme: '' },
      { name: 'Frank', reason: '', theme: '' },
      { name: 'Franklin', reason: '', theme: '' },
      { name: 'Frederick', reason: '', theme: '' },
      { name: 'Fredrick', reason: '', theme: '' },
      { name: 'Fletcher', reason: '', theme: '' },
      { name: 'Floyd', reason: '', theme: '' },
      { name: 'Gabriel', reason: '', theme: '' },
      { name: 'Gareth', reason: '', theme: '' },
      { name: 'Garrett', reason: '', theme: '' },
      { name: 'Gavin', reason: '', theme: '' },
      { name: 'Geoffrey', reason: '', theme: '' },
      { name: 'George', reason: '', theme: '' },
      { name: 'Gerald', reason: '', theme: '' },
      { name: 'Gideon', reason: '', theme: '' },
      { name: 'Gilbert', reason: '', theme: '' },
      { name: 'Graham', reason: '', theme: '' },
      { name: 'Hank', reason: '', theme: '' },
      { name: 'Harley', reason: '', theme: '' },
      { name: 'Harrison', reason: '', theme: '' },
      { name: 'Harry', reason: '', theme: '' },
      { name: 'Harvey', reason: '', theme: '' },
      { name: 'Hector', reason: '', theme: '' },
      { name: 'Henry', reason: '', theme: '' },
      { name: 'Herbert', reason: '', theme: '' },
      { name: 'Holden', reason: '', theme: '' },
      { name: 'Howard', reason: '', theme: '' },
      { name: 'Ian', reason: '', theme: '' },
      { name: 'Ibrahim', reason: '', theme: '' },
      { name: 'Ignacio', reason: '', theme: '' },
      { name: 'Iker', reason: '', theme: '' },
      { name: 'Immanuel', reason: '', theme: '' },
      { name: 'Inigo', reason: '', theme: '' },
      { name: 'Ira', reason: '', theme: '' },
      { name: 'Isaac', reason: '', theme: '' },
      { name: 'Isaiah', reason: '', theme: '' },
      { name: 'Ivan', reason: '', theme: '' },
      { name: 'Jack', reason: '', theme: '' },
      { name: 'Jacob', reason: '', theme: '' },
      { name: 'James', reason: '', theme: '' },
      { name: 'Jared', reason: '', theme: '' },
      { name: 'Jason', reason: '', theme: '' },
      { name: 'Jasper', reason: '', theme: '' },
      { name: 'Jeffrey', reason: '', theme: '' },
      { name: 'Jeremy', reason: '', theme: '' },
      { name: 'Joel', reason: '', theme: '' },
      { name: 'Jonathan', reason: '', theme: '' },
      { name: 'Kai', reason: '', theme: '' },
      { name: 'Kaleb', reason: '', theme: '' },
      { name: 'Karl', reason: '', theme: '' },
      { name: 'Keith', reason: '', theme: '' },
      { name: 'Kelvin', reason: '', theme: '' },
      { name: 'Kenneth', reason: '', theme: '' },
      { name: 'Kevin', reason: '', theme: '' },
      { name: 'Kieran', reason: '', theme: '' },
      { name: 'Kirk', reason: '', theme: '' },
      { name: 'Kyle', reason: '', theme: '' },
      { name: 'Lachlan', reason: '', theme: '' },
      { name: 'Lance', reason: '', theme: '' },
      { name: 'Larry', reason: '', theme: '' },
      { name: 'Lawrence', reason: '', theme: '' },
      { name: 'Lee', reason: '', theme: '' },
      { name: 'Leo', reason: '', theme: '' },
      { name: 'Leonard', reason: '', theme: '' },
      { name: 'Lewis', reason: '', theme: '' },
      { name: 'Liam', reason: '', theme: '' },
      { name: 'Lucas', reason: '', theme: '' },
      { name: 'Mason', reason: '', theme: '' },
      { name: 'Marcus', reason: '', theme: '' },
      { name: 'Mark', reason: '', theme: '' },
      { name: 'Martin', reason: '', theme: '' },
      { name: 'Matthew', reason: '', theme: '' },
      { name: 'Maxwell', reason: '', theme: '' },
      { name: 'Michael', reason: '', theme: '' },
      { name: 'Miles', reason: '', theme: '' },
      { name: 'Mitchell', reason: '', theme: '' },
      { name: 'Morgan', reason: '', theme: '' },
      { name: 'Nathan', reason: '', theme: '' },
      { name: 'Nathaniel', reason: '', theme: '' },
      { name: 'Neil', reason: '', theme: '' },
      { name: 'Nicholas', reason: '', theme: '' },
      { name: 'Nico', reason: '', theme: '' },
      { name: 'Nigel', reason: '', theme: '' },
      { name: 'Noah', reason: '', theme: '' },
      { name: 'Nolan', reason: '', theme: '' },
      { name: 'Norman', reason: '', theme: '' },
      { name: 'Niall', reason: '', theme: '' },
      { name: 'Oakley', reason: '', theme: '' },
      { name: 'Oliver', reason: '', theme: '' },
      { name: 'Omar', reason: '', theme: '' },
      { name: 'Orson', reason: '', theme: '' },
      { name: 'Oscar', reason: '', theme: '' },
      { name: 'Owen', reason: '', theme: '' },
      { name: 'Olaf', reason: '', theme: '' },
      { name: 'Otis', reason: '', theme: '' },
      { name: 'Otto', reason: '', theme: '' },
      { name: 'Orion', reason: '', theme: '' },
      { name: 'Patrick', reason: '', theme: '' },
      { name: 'Paul', reason: '', theme: '' },
      { name: 'Peter', reason: '', theme: '' },
      { name: 'Philip', reason: '', theme: '' },
      { name: 'Pierce', reason: '', theme: '' },
      { name: 'Preston', reason: '', theme: '' },
      { name: 'Percy', reason: '', theme: '' },
      { name: 'Perry', reason: '', theme: '' },
      { name: 'Peyton', reason: '', theme: '' },
      { name: 'Phoenix', reason: '', theme: '' },
      { name: 'Quentin', reason: '', theme: '' },
      { name: 'Quinn', reason: '', theme: '' },
      { name: 'Quinton', reason: '', theme: '' },
      { name: 'Quincy', reason: '', theme: '' },
      { name: 'Quade', reason: '', theme: '' },
      { name: 'Quade', reason: '', theme: '' },
      { name: 'Quinten', reason: '', theme: '' },
      { name: 'Quillon', reason: '', theme: '' },
      { name: 'Quirin', reason: '', theme: '' },
      { name: 'Quoc', reason: '', theme: '' },
      { name: 'Ralph', reason: '', theme: '' },
      { name: 'Randall', reason: '', theme: '' },
      { name: 'Raymond', reason: '', theme: '' },
      { name: 'Reece', reason: '', theme: '' },
      { name: 'Reed', reason: '', theme: '' },
      { name: 'Reginald', reason: '', theme: '' },
      { name: 'Remy', reason: '', theme: '' },
      { name: 'Rex', reason: '', theme: '' },
      { name: 'Richard', reason: '', theme: '' },
      { name: 'Robert', reason: '', theme: '' },
      { name: 'Samuel', reason: '', theme: '' },
      { name: 'Scott', reason: '', theme: '' },
      { name: 'Sean', reason: '', theme: '' },
      { name: 'Sebastian', reason: '', theme: '' },
      { name: 'Seth', reason: '', theme: '' },
      { name: 'Shane', reason: '', theme: '' },
      { name: 'Simon', reason: '', theme: '' },
      { name: 'Spencer', reason: '', theme: '' },
      { name: 'Stanley', reason: '', theme: '' },
      { name: 'Stephen', reason: '', theme: '' },
      { name: 'Taylor', reason: '', theme: '' },
      { name: 'Terrence', reason: '', theme: '' },
      { name: 'Theodore', reason: '', theme: '' },
      { name: 'Thomas', reason: '', theme: '' },
      { name: 'Timothy', reason: '', theme: '' },
      { name: 'Toby', reason: '', theme: '' },
      { name: 'Todd', reason: '', theme: '' },
      { name: 'Tony', reason: '', theme: '' },
      { name: 'Trent', reason: '', theme: '' },
      { name: 'Tristan', reason: '', theme: '' },
      { name: 'Ulysses', reason: '', theme: '' },
      { name: 'Umar', reason: '', theme: '' },
      { name: 'Ulrich', reason: '', theme: '' },
      { name: 'Upton', reason: '', theme: '' },
      { name: 'Urbano', reason: '', theme: '' },
      { name: 'Urban', reason: '', theme: '' },
      { name: 'Uriel', reason: '', theme: '' },
      { name: 'Ugo', reason: '', theme: '' },
      { name: 'Usher', reason: '', theme: '' },
      { name: 'Uri', reason: '', theme: '' },
      { name: 'Val', reason: '', theme: '' },
      { name: 'Valentin', reason: '', theme: '' },
      { name: 'Valentino', reason: '', theme: '' },
      { name: 'Van', reason: '', theme: '' },
      { name: 'Vaughn', reason: '', theme: '' },
      { name: 'Vernon', reason: '', theme: '' },
      { name: 'Victor', reason: '', theme: '' },
      { name: 'Vince', reason: '', theme: '' },
      { name: 'Vincent', reason: '', theme: '' },
      { name: 'Vito', reason: '', theme: '' },
      { name: 'Wade', reason: '', theme: '' },
      { name: 'Walter', reason: '', theme: '' },
      { name: 'Warren', reason: '', theme: '' },
      { name: 'Wayne', reason: '', theme: '' },
      { name: 'Wesley', reason: '', theme: '' },
      { name: 'West', reason: '', theme: '' },
      { name: 'Weston', reason: '', theme: '' },
      { name: 'Wilbur', reason: '', theme: '' },
      { name: 'Will', reason: '', theme: '' },
      { name: 'William', reason: '', theme: '' },
      { name: 'Xavier', reason: '', theme: '' },
      { name: 'Xander', reason: '', theme: '' },
      { name: 'Xerxes', reason: '', theme: '' },
      { name: 'Xenon', reason: '', theme: '' },
      { name: 'Xanthus', reason: '', theme: '' },
      { name: 'Xavi', reason: '', theme: '' },
      { name: 'Xian', reason: '', theme: '' },
      { name: 'Xeno', reason: '', theme: '' },
      { name: 'Xever', reason: '', theme: '' },
      { name: 'Xylon', reason: '', theme: '' },
      { name: 'Yahir', reason: '', theme: '' },
      { name: 'Yale', reason: '', theme: '' },
      { name: 'Yamato', reason: '', theme: '' },
      { name: 'Yanis', reason: '', theme: '' },
      { name: 'Yardley', reason: '', theme: '' },
      { name: 'Yasir', reason: '', theme: '' },
      { name: 'Yates', reason: '', theme: '' },
      { name: 'Yohan', reason: '', theme: '' },
      { name: 'Youssef', reason: '', theme: '' },
      { name: 'Yusuf', reason: '', theme: '' },
      { name: 'Zachary', reason: '', theme: '' },
      { name: 'Zane', reason: '', theme: '' },
      { name: 'Zayden', reason: '', theme: '' },
      { name: 'Zeke', reason: '', theme: '' },
      { name: 'Zephyr', reason: '', theme: '' },
      { name: 'Zeus', reason: '', theme: '' },
      { name: 'Zion', reason: '', theme: '' },
      { name: 'Zander', reason: '', theme: '' },
      { name: 'Zavier', reason: '', theme: '' },
      { name: 'Zayne', reason: '', theme: '' }
    ],
    female: [
      { name: 'Luna', reason: 'Means moon, mysterious and elegant.', theme: 'Popular' },
      { name: 'Bella', reason: 'Means beautiful in Italian.', theme: 'Popular' },
      { name: 'Lucy', reason: 'Means light, bright and joyful.', theme: 'Popular' },
      // ... 其他女性狗狗名字 ...
      { name: 'Abigail', reason: '', theme: '' },
      { name: 'Ada', reason: '', theme: '' },
      { name: 'Adelaide', reason: '', theme: '' },
      { name: 'Alice', reason: '', theme: '' },
      { name: 'Alicia', reason: '', theme: '' },
      { name: 'Allison', reason: '', theme: '' },
      { name: 'Amanda', reason: '', theme: '' },
      { name: 'Amelia', reason: '', theme: '' },
      { name: 'Angela', reason: '', theme: '' },
      { name: 'Anna', reason: '', theme: '' },
      { name: 'Barbara', reason: '', theme: '' },
      { name: 'Beatrice', reason: '', theme: '' },
      { name: 'Becky', reason: '', theme: '' },
      { name: 'Bella', reason: '', theme: '' },
      { name: 'Bethany', reason: '', theme: '' },
      { name: 'Bianca', reason: '', theme: '' },
      { name: 'Bonnie', reason: '', theme: '' },
      { name: 'Brenda', reason: '', theme: '' },
      { name: 'Brianna', reason: '', theme: '' },
      { name: 'Brooke', reason: '', theme: '' },
      { name: 'Caitlin', reason: '', theme: '' },
      { name: 'Callie', reason: '', theme: '' },
      { name: 'Camila', reason: '', theme: '' },
      { name: 'Candace', reason: '', theme: '' },
      { name: 'Carla', reason: '', theme: '' },
      { name: 'Carmen', reason: '', theme: '' },
      { name: 'Carol', reason: '', theme: '' },
      { name: 'Caroline', reason: '', theme: '' },
      { name: 'Cassandra', reason: '', theme: '' },
      { name: 'Catherine', reason: '', theme: '' },
      { name: 'Daisy', reason: '', theme: '' },
      { name: 'Dakota', reason: '', theme: '' },
      { name: 'Dana', reason: '', theme: '' },
      { name: 'Daniela', reason: '', theme: '' },
      { name: 'Danielle', reason: '', theme: '' },
      { name: 'Daphne', reason: '', theme: '' },
      { name: 'Dawn', reason: '', theme: '' },
      { name: 'Deborah', reason: '', theme: '' },
      { name: 'Delilah', reason: '', theme: '' },
      { name: 'Denise', reason: '', theme: '' },
      { name: 'Eileen', reason: '', theme: '' },
      { name: 'Elaine', reason: '', theme: '' },
      { name: 'Eleanor', reason: '', theme: '' },
      { name: 'Elena', reason: '', theme: '' },
      { name: 'Elizabeth', reason: '', theme: '' },
      { name: 'Ella', reason: '', theme: '' },
      { name: 'Ellie', reason: '', theme: '' },
      { name: 'Eloise', reason: '', theme: '' },
      { name: 'Emily', reason: '', theme: '' },
      { name: 'Emma', reason: '', theme: '' },
      { name: 'Faith', reason: '', theme: '' },
      { name: 'Fanny', reason: '', theme: '' },
      { name: 'Farrah', reason: '', theme: '' },
      { name: 'Felicity', reason: '', theme: '' },
      { name: 'Fiona', reason: '', theme: '' },
      { name: 'Flora', reason: '', theme: '' },
      { name: 'Florence', reason: '', theme: '' },
      { name: 'Frances', reason: '', theme: '' },
      { name: 'Francine', reason: '', theme: '' },
      { name: 'Freya', reason: '', theme: '' },
      { name: 'Gabrielle', reason: '', theme: '' },
      { name: 'Gail', reason: '', theme: '' },
      { name: 'Gemma', reason: '', theme: '' },
      { name: 'Genevieve', reason: '', theme: '' },
      { name: 'Georgia', reason: '', theme: '' },
      { name: 'Geraldine', reason: '', theme: '' },
      { name: 'Gillian', reason: '', theme: '' },
      { name: 'Gloria', reason: '', theme: '' },
      { name: 'Grace', reason: '', theme: '' },
      { name: 'Greta', reason: '', theme: '' },
      { name: 'Haley', reason: '', theme: '' },
      { name: 'Hannah', reason: '', theme: '' },
      { name: 'Harper', reason: '', theme: '' },
      { name: 'Hazel', reason: '', theme: '' },
      { name: 'Heidi', reason: '', theme: '' },
      { name: 'Helen', reason: '', theme: '' },
      { name: 'Helena', reason: '', theme: '' },
      { name: 'Hillary', reason: '', theme: '' },
      { name: 'Holly', reason: '', theme: '' },
      { name: 'Hope', reason: '', theme: '' },
      { name: 'Iliana', reason: '', theme: '' },
      { name: 'Imogen', reason: '', theme: '' },
      { name: 'India', reason: '', theme: '' },
      { name: 'Indigo', reason: '', theme: '' },
      { name: 'Ines', reason: '', theme: '' },
      { name: 'Ingrid', reason: '', theme: '' },
      { name: 'Irene', reason: '', theme: '' },
      { name: 'Iris', reason: '', theme: '' },
      { name: 'Isabella', reason: '', theme: '' },
      { name: 'Isla', reason: '', theme: '' },
      { name: 'Jacqueline', reason: '', theme: '' },
      { name: 'Jade', reason: '', theme: '' },
      { name: 'Jamie', reason: '', theme: '' },
      { name: 'Jane', reason: '', theme: '' },
      { name: 'Jasmine', reason: '', theme: '' },
      { name: 'Jean', reason: '', theme: '' },
      { name: 'Jenna', reason: '', theme: '' },
      { name: 'Jennifer', reason: '', theme: '' },
      { name: 'Jessica', reason: '', theme: '' },
      { name: 'Jill', reason: '', theme: '' },
      { name: 'Kaitlyn', reason: '', theme: '' },
      { name: 'Kara', reason: '', theme: '' },
      { name: 'Karen', reason: '', theme: '' },
      { name: 'Karina', reason: '', theme: '' },
      { name: 'Katherine', reason: '', theme: '' },
      { name: 'Kathleen', reason: '', theme: '' },
      { name: 'Katie', reason: '', theme: '' },
      { name: 'Kelly', reason: '', theme: '' },
      { name: 'Kendra', reason: '', theme: '' },
      { name: 'Kimberly', reason: '', theme: '' },
      { name: 'Lacey', reason: '', theme: '' },
      { name: 'Lana', reason: '', theme: '' },
      { name: 'Lara', reason: '', theme: '' },
      { name: 'Lauren', reason: '', theme: '' },
      { name: 'Layla', reason: '', theme: '' },
      { name: 'Leah', reason: '', theme: '' },
      { name: 'Leila', reason: '', theme: '' },
      { name: 'Lena', reason: '', theme: '' },
      { name: 'Leslie', reason: '', theme: '' },
      { name: 'Lily', reason: '', theme: '' },
      { name: 'Mabel', reason: '', theme: '' },
      { name: 'Mackenzie', reason: '', theme: '' },
      { name: 'Madison', reason: '', theme: '' },
      { name: 'Maeve', reason: '', theme: '' },
      { name: 'Maggie', reason: '', theme: '' },
      { name: 'Mallory', reason: '', theme: '' },
      { name: 'Mandy', reason: '', theme: '' },
      { name: 'Margaret', reason: '', theme: '' },
      { name: 'Maria', reason: '', theme: '' },
      { name: 'Mary', reason: '', theme: '' },
      { name: 'Nadia', reason: '', theme: '' },
      { name: 'Nancy', reason: '', theme: '' },
      { name: 'Naomi', reason: '', theme: '' },
      { name: 'Natalie', reason: '', theme: '' },
      { name: 'Natasha', reason: '', theme: '' },
      { name: 'Nell', reason: '', theme: '' },
      { name: 'Nia', reason: '', theme: '' },
      { name: 'Nicole', reason: '', theme: '' },
      { name: 'Nina', reason: '', theme: '' },
      { name: 'Nora', reason: '', theme: '' },
      { name: 'Octavia', reason: '', theme: '' },
      { name: 'Odessa', reason: '', theme: '' },
      { name: 'Olive', reason: '', theme: '' },
      { name: 'Olivia', reason: '', theme: '' },
      { name: 'Opal', reason: '', theme: '' },
      { name: 'Ophelia', reason: '', theme: '' },
      { name: 'Oriana', reason: '', theme: '' },
      { name: 'Orla', reason: '', theme: '' },
      { name: 'Ottilie', reason: '', theme: '' },
      { name: 'Olympia', reason: '', theme: '' },
      { name: 'Paige', reason: '', theme: '' },
      { name: 'Pamela', reason: '', theme: '' },
      { name: 'Patricia', reason: '', theme: '' },
      { name: 'Paula', reason: '', theme: '' },
      { name: 'Penelope', reason: '', theme: '' },
      { name: 'Penny', reason: '', theme: '' },
      { name: 'Petra', reason: '', theme: '' },
      { name: 'Phoebe', reason: '', theme: '' },
      { name: 'Poppy', reason: '', theme: '' },
      { name: 'Priscilla', reason: '', theme: '' },
      { name: 'Quinn', reason: '', theme: '' },
      { name: 'Quinta', reason: '', theme: '' },
      { name: 'Quilla', reason: '', theme: '' },
      { name: 'Querida', reason: '', theme: '' },
      { name: 'Quincy', reason: '', theme: '' },
      { name: 'Quinlan', reason: '', theme: '' },
      { name: 'Quiana', reason: '', theme: '' },
      { name: 'Quinn', reason: '', theme: '' },
      { name: 'Queen', reason: '', theme: '' },
      { name: 'Quintana', reason: '', theme: '' },
      { name: 'Rachel', reason: '', theme: '' },
      { name: 'Rae', reason: '', theme: '' },
      { name: 'Raven', reason: '', theme: '' },
      { name: 'Rebecca', reason: '', theme: '' },
      { name: 'Reese', reason: '', theme: '' },
      { name: 'Regina', reason: '', theme: '' },
      { name: 'Renee', reason: '', theme: '' },
      { name: 'Riley', reason: '', theme: '' },
      { name: 'Rita', reason: '', theme: '' },
      { name: 'Ruby', reason: '', theme: '' },
      { name: 'Sabrina', reason: '', theme: '' },
      { name: 'Sadie', reason: '', theme: '' },
      { name: 'Sally', reason: '', theme: '' },
      { name: 'Samantha', reason: '', theme: '' },
      { name: 'Sandra', reason: '', theme: '' },
      { name: 'Sarah', reason: '', theme: '' },
      { name: 'Scarlett', reason: '', theme: '' },
      { name: 'Selena', reason: '', theme: '' },
      { name: 'Serena', reason: '', theme: '' },
      { name: 'Sophia', reason: '', theme: '' },
      { name: 'Tabitha', reason: '', theme: '' },
      { name: 'Talia', reason: '', theme: '' },
      { name: 'Tamara', reason: '', theme: '' },
      { name: 'Tania', reason: '', theme: '' },
      { name: 'Tara', reason: '', theme: '' },
      { name: 'Taylor', reason: '', theme: '' },
      { name: 'Teagan', reason: '', theme: '' },
      { name: 'Teresa', reason: '', theme: '' },
      { name: 'Tessa', reason: '', theme: '' },
      { name: 'Tiffany', reason: '', theme: '' },
      { name: 'Uma', reason: '', theme: '' },
      { name: 'Una', reason: '', theme: '' },
      { name: 'Unique', reason: '', theme: '' },
      { name: 'Unity', reason: '', theme: '' },
      { name: 'Ursula', reason: '', theme: '' },
      { name: 'Ula', reason: '', theme: '' },
      { name: 'Ulrika', reason: '', theme: '' },
      { name: 'Ursa', reason: '', theme: '' },
      { name: 'Ulyana', reason: '', theme: '' },
      { name: 'Udella', reason: '', theme: '' },
      { name: 'Valentina', reason: '', theme: '' },
      { name: 'Valerie', reason: '', theme: '' },
      { name: 'Vanessa', reason: '', theme: '' },
      { name: 'Veda', reason: '', theme: '' },
      { name: 'Vera', reason: '', theme: '' },
      { name: 'Veronica', reason: '', theme: '' },
      { name: 'Vicky', reason: '', theme: '' },
      { name: 'Victoria', reason: '', theme: '' },
      { name: 'Vienna', reason: '', theme: '' },
      { name: 'Violet', reason: '', theme: '' },
      { name: 'Willa', reason: '', theme: '' },
      { name: 'Willow', reason: '', theme: '' },
      { name: 'Winifred', reason: '', theme: '' },
      { name: 'Winter', reason: '', theme: '' },
      { name: 'Whitney', reason: '', theme: '' },
      { name: 'Wendy', reason: '', theme: '' },
      { name: 'Wren', reason: '', theme: '' },
      { name: 'Winnie', reason: '', theme: '' },
      { name: 'Wilma', reason: '', theme: '' },
      { name: 'Waverly', reason: '', theme: '' },
      { name: 'Xandra', reason: '', theme: '' },
      { name: 'Xanthe', reason: '', theme: '' },
      { name: 'Xara', reason: '', theme: '' },
      { name: 'Xavia', reason: '', theme: '' },
      { name: 'Xena', reason: '', theme: '' },
      { name: 'Xenia', reason: '', theme: '' },
      { name: 'Xiomara', reason: '', theme: '' },
      { name: 'Xylia', reason: '', theme: '' },
      { name: 'Xylina', reason: '', theme: '' },
      { name: 'Xuxa', reason: '', theme: '' },
      { name: 'Yara', reason: '', theme: '' },
      { name: 'Yasmin', reason: '', theme: '' },
      { name: 'Yelena', reason: '', theme: '' },
      { name: 'Yvette', reason: '', theme: '' },
      { name: 'Yvonne', reason: '', theme: '' },
      { name: 'Yasmine', reason: '', theme: '' },
      { name: 'Yesenia', reason: '', theme: '' },
      { name: 'Yolanda', reason: '', theme: '' },
      { name: 'Yulia', reason: '', theme: '' },
      { name: 'Yuna', reason: '', theme: '' },
      { name: 'Zara', reason: '', theme: '' },
      { name: 'Zaria', reason: '', theme: '' },
      { name: 'Zella', reason: '', theme: '' },
      { name: 'Zelda', reason: '', theme: '' },
      { name: 'Zena', reason: '', theme: '' },
      { name: 'Zendaya', reason: '', theme: '' },
      { name: 'Zia', reason: '', theme: '' },
      { name: 'Zinnia', reason: '', theme: '' },
      { name: 'Zoe', reason: '', theme: '' },
      { name: 'Zora', reason: '', theme: '' }
    ]
  };

  const generateNames = () => {
    let filteredNames = [];
    
    // 根据性别筛选
    if (gender) {
      filteredNames = [...dogNameDatabase[gender]];
    } else {
      filteredNames = [...dogNameDatabase.male, ...dogNameDatabase.female];
    }
    
    // 根据首字母筛选
    if (startLetter) {
      filteredNames = filteredNames.filter(item => item.name.toUpperCase().startsWith(startLetter));
    }
    
    // 根据主题筛选
    if (theme) {
      filteredNames = filteredNames.filter(item => item.theme === theme);
    }
    
    // 根据名字长度筛选
    if (nameLength !== 'any') {
      filteredNames = filteredNames.filter(item => {
        if (nameLength === 'short') return item.name.length <= 4;
        if (nameLength === 'medium') return item.name.length > 4 && item.name.length <= 8;
        if (nameLength === 'long') return item.name.length > 8;
        return true;
      });
    }
    
    // 排序
    if (orderBy === 'popular') {
      filteredNames.sort(() => 0.5 - Math.random());
    } else {
      filteredNames.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    // 选择前20个名字（或者所有名字，如果少于20个）
    setGeneratedNames(filteredNames.slice(0, 20));
  };

  const toggleFavorite = (name) => {
    setFavorites(prev => 
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  const copyToClipboard = (name) => {
    navigator.clipboard.writeText(name);
    // 可以添加一个提示来显示复制成功
  };

  const downloadFavorites = () => {
    const content = favorites.join('\n');
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'favorite_dog_names.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // 这里应该添加实际的订阅逻辑
    console.log(`Subscribed with email: ${email}`);
    setEmail('');
    // 可以添加一个提示来显示订阅成功
  };

  return (
    <div className="max-w-4xl mx-auto p-4" style={{backgroundColor: '#FFFBE6'}}>
      <h1 className="text-3xl font-bold text-center mb-6">Dog Names Generator</h1>
      
      <Card className="mb-4">
        <CardHeader>
          <h2 className="text-xl font-semibold flex items-center">
            Select Gender <ChevronDown className="ml-2" />
          </h2>
        </CardHeader>
        <CardContent className="flex space-x-4">
          <Button onClick={() => setGender('male')} variant={gender === 'male' ? 'default' : 'outline'}>Male</Button>
          <Button onClick={() => setGender('female')} variant={gender === 'female' ? 'default' : 'outline'}>Female</Button>
          <Button onClick={() => setGender('')} variant={gender === '' ? 'default' : 'outline'}>Any</Button>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <h2 className="text-xl font-semibold flex items-center">
            Name Starts With <ChevronDown className="ml-2" />
          </h2>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {alphabet.map(letter => (
              <Button key={letter} onClick={() => setStartLetter(letter)} variant={startLetter === letter ? 'default' : 'outline'}>
                {letter}
              </Button>
            ))}
            <Button onClick={() => setStartLetter('')} variant={startLetter === '' ? 'default' : 'outline'}>Any</Button>
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <h2 className="text-xl font-semibold flex items-center">
            Select Theme <ChevronDown className="ml-2" />
          </h2>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {themes.map(t => (
              <Button key={t} onClick={() => setTheme(t)} variant={theme === t ? 'default' : 'outline'}>
                {t}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <h2 className="text-xl font-semibold flex items-center">
            Order By <ChevronDown className="ml-2" />
          </h2>
        </CardHeader>
        <CardContent className="flex space-x-4">
          <Button onClick={() => setOrderBy('popular')} variant={orderBy === 'popular' ? 'default' : 'outline'}>Popular</Button>
          <Button onClick={() => setOrderBy('unique')} variant={orderBy === 'unique' ? 'default' : 'outline'}>Unique</Button>
        </CardContent>
      </Card>

      <Card className="mb-4">
        <CardHeader>
          <h2 className="text-xl font-semibold">Name Length</h2>
        </CardHeader>
        <CardContent>
          <select 
            value={nameLength} 
            onChange={(e) => setNameLength(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="any">Any</option>
            <option value="short">Short (1-4 letters)</option>
            <option value="medium">Medium (5-8 letters)</option>
            <option value="long">Long (9+ letters)</option>
          </select>
        </CardContent>
      </Card>

      <Button onClick={generateNames} className="w-full mb-4">
        <Search className="mr-2" /> Find Names
      </Button>

      {generatedNames.length > 0 ? (
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold">Generated Names</h2>
          </CardHeader>
          <CardContent>
            <ul className="space-y-4">
              {generatedNames.map((item, index) => (
                <li key={index} className="flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="font-bold">{item.name}</span>
                    <div>
                      <Button onClick={() => toggleFavorite(item.name)} variant="ghost">
                        <Heart fill={favorites.includes(item.name) ? 'currentColor' : 'none'} />
                      </Button>
                      <Button onClick={() => copyToClipboard(item.name)} variant="ghost">
                        <Copy />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{item.reason}</p>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ) : (
        <p>No names match your criteria. Try adjusting your selections.</p>
      )}

      {favorites.length > 0 && (
        <Card className="mt-4">
          <CardHeader>
            <h2 className="text-xl font-semibold">Favorites</h2>
          </CardHeader>
          <CardContent>
            <ul className="mb-4">
              {favorites.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
            <Button onClick={downloadFavorites}>
              <Download className="mr-2" /> Download Favorites
            </Button>
          </CardContent>
        </Card>
      )}

      <Card className="mt-4">
        <CardHeader>
          <h2 className="text-xl font-semibold">Subscribe for More Dog Names</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubscribe} className="flex space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button type="submit">
              <Mail className="mr-2" /> Subscribe
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DogNameGenerator;
