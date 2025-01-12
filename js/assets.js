const topMovies = [
    //Horror
        {
          title: "Hereditary",
          watchtime: 127,
          duration: "medium",
          mood: "relaxed",
          genre: "horror",
          platformLink: "https://www.amazon.com/Hereditary-Toni-Collette/dp/B07G9L6BN8",
          description: "A deeply unsettling horror film about a family haunted by tragic secrets, where the death of the family matriarch uncovers disturbing truths and unleashes a terrifying supernatural force."
        },
        {
          title: "A Quiet Place",
          watchtime: 97,
          duration: "medium",
          mood: "excited",
          genre: "horror",
          platformLink: "https://www.amazon.com/A-Quiet-Place-Emily-Blunt/dp/B07BJ4Y2X8",
          description: "A tense and thrilling horror film about a family living in silence to avoid blind creatures that hunt by sound, with the added pressure of a mother about to give birth."
        },
        {
          title: "The Cabin in the Woods",
          watchtime: 95,
          duration: "medium",
          mood: "happy",
          genre: "horror",
          platformLink: "https://www.amazon.com/Cabin-Woods-Josh-Whedon/dp/B007X43Z4K",
          description: "A darkly comedic horror film where a group of friends visiting a remote cabin are unknowingly manipulated by a secret organization, leading to unexpected twists and hilarious moments."
        },
        {
          title: "The Descent",
          watchtime: 99,
          duration: "medium",
          mood: "adventurous",
          genre: "horror",
          platformLink: "https://www.amazon.com/Descent-Shauna-Macdonald/dp/B003ZSHR24",
          description: "A thrilling and suspenseful horror film about a group of women who go spelunking in a remote cave, only to discover they are not alone and are being hunted by monstrous creatures."
        },
        {
          title: "The Babadook",
          watchtime: 84,
          duration: "short",
          mood: "relaxed",
          genre: "horror",
          platformLink: "https://www.netflix.com/title/70264688",
          description: "A psychological horror about a single mother and her son, who are haunted by a sinister presence that seems to have come from a mysterious children's book."
        },
        {
          title: "V/H/S",
          watchtime: 80,
          duration: "short",
          mood: "excited",
          genre: "horror",
          platformLink: "https://www.amazon.com/V-H-S-Kentucky-Williams/dp/B00AZ6GBIU",
          description: "A found-footage anthology horror film where a group of criminals discovers disturbing footage while breaking into a house."
        },
        {
          title: "Tucker & Dale vs. Evil",
          watchtime: 89,
          duration: "short",
          mood: "happy",
          genre: "horror",
          platformLink: "https://www.amazon.com/Tucker-Dale-vs-Evil-Blu-ray/dp/B00J3Z65E6",
          description: "A comedic horror film where two well-meaning hillbillies are mistaken for killers by a group of college students, leading to hilarious misunderstandings and gruesome accidents."
        },
        {
          title: "The Ritual",
          watchtime: 89,
          duration: "short",
          mood: "adventurous",
          genre: "horror",
          platformLink: "https://www.netflix.com/title/80189252",
          description: "A group of friends on a hiking trip in the Scandinavian wilderness encounters supernatural horror when they stumble upon a dark secret hidden in the forest."
        },
        {
            title: "The Shining",
            watchtime: 146,
            duration: "long",
            mood: "relaxed",
            genre: "horror",
            platformLink: "https://www.amazon.com/Shining-Jack-Nicholson/dp/B003ZZTWT8",
            description: "A psychological horror film about a family staying in an isolated hotel during the off-season, where the father slowly descends into madness and violence, while supernatural forces begin to take hold."
          },
          {
            title: "It Chapter Two",
            watchtime: 169,
            duration: "long",
            mood: "excited",
            genre: "horror",
            platformLink: "https://www.amazon.com/It-Chapter-Two-James-McAvoy/dp/B07T6W9QZ3",
            description: "A continuation of the battle against the terrifying entity known as 'It,' the Losers' Club reunites as adults to face their fears and defeat the malevolent being once and for all."
          },
          {
            title: "The Conjuring 2",
            watchtime: 134,
            duration: "long",
            mood: "happy",
            genre: "horror",
            platformLink: "https://www.amazon.com/The-Conjuring-2-Patrick-Wilson/dp/B01F9ZPYZS",
            description: "The paranormal investigators Ed and Lorraine Warren travel to London to investigate the haunting of a family, where they uncover a terrifying presence that threatens their lives."
          },
          {
            title: "Midsommar",
            watchtime: 148,
            duration: "long",
            mood: "adventurous",
            genre: "horror",
            platformLink: "https://www.amazon.com/Midsommar-Florian-Block/dp/B07VJRZ3K5",
            description: "A group of friends travel to Sweden to attend a rural midsummer festival, but they soon find themselves caught in a series of disturbing events as they unravel the dark secrets of the secluded commune."
          },
          
          //Action

          {
            title: "Mad Max: Fury Road (Black & Chrome Edition)",
            watchtime: 88,
            duration: "short",
            mood: "relaxed",
            genre: "action",
            platformLink: "https://www.amazon.com/Mad-Max-Fury-Black-Chrome/dp/B01EGV03U0",
            description: "In a post-apocalyptic world, Max teams up with Imperator Furiosa to escape a tyrannical warlord, but their pursuit for freedom leads to intense battles and sorrowful losses."
          },
          {
            title: "The Raid: Redemption",
            watchtime: 81,
            duration: "short",
            mood: "excited",
            genre: "action",
            platformLink: "https://www.amazon.com/Raid-Redemption-Donny-Alamsyah/dp/B005ELMXPU",
            description: "A rookie cop and his elite squadmates enter a high-rise building controlled by a ruthless crime lord, where they must fight their way through each floor in a non-stop, adrenaline-pumping action thriller."
          },
          {
            title: "Drive",
            watchtime: 80,
            duration: "short",
            mood: "happy",
            genre: "action",
            platformLink: "https://www.amazon.com/Drive-Ryan-Gosling/dp/B005D5Q27I",
            description: "A stuntman for Hollywood films moonlights as a getaway driver, but his life takes a turn when he is drawn into a dangerous criminal underworld to protect a woman he has come to love."
          },
          {
            title: "John Wick",
            watchtime: 101,
            duration: "medium",
            mood: "excited",
            genre: "action",
            platformLink: "https://www.amazon.com/John-Wick-Keanu-Reeves/dp/B00MR7KNGG",
            description: "A retired hitman seeks vengeance against those who wronged him, delivering thrilling and intense action sequences in a world of assassins and endless combat."
          },
          {
            title: "The Bourne Identity",
            watchtime: 119,
            duration: "medium",
            mood: "relaxed",
            genre: "action",
            platformLink: "https://www.amazon.com/Bourne-Identity-Matt-Damon/dp/B000V5NE2A",
            description: "A man with amnesia is pursued by a government agency while attempting to piece together his past, with non-stop action and personal tragedy as he discovers he is a deadly operative."
          },
          {
            title: "The Equalizer",
            watchtime: 119,
            duration: "medium",
            mood: "happy",
            genre: "action",
            platformLink: "https://www.amazon.com/Equalizer-Denzel-Washington/dp/B00MPX9Z6A",
            description: "A retired black-ops operative comes out of his quiet life to protect a young girl from ruthless criminals, bringing his skills back to the forefront in a series of well-choreographed action sequences."
          },
          {
            title: "Die Hard",
            watchtime: 132,
            duration: "long",
            mood: "adventurous",
            genre: "action",
            platformLink: "https://www.amazon.com/Die-Hard-Bruce-Willis/dp/B000I9Y9FS",
            description: "A New York cop finds himself battling terrorists who take over a Los Angeles skyscraper, with only his wit and determination standing between them and their goal of billions in ransom."
          },
          {
            title: "The Dark Knight",
            watchtime: 152,
            duration: "long",
            mood: "happy",
            genre: "action",
            platformLink: "https://www.amazon.com/Dark-Knight-Christian-Bale/dp/B001GZ6Q84",
            description: "Batman faces his greatest challenge yet when a psychotic villain, the Joker, emerges, threatening to plunge Gotham City into chaos, testing the hero's limits and ideals."
          },
          {
            title: "Inception",
            watchtime: 148,
            duration: "long",
            mood: "adventurous",
            genre: "action",
            platformLink: "https://www.amazon.com/Inception-Leonardo-DiCaprio/dp/B0047WJ11G",
            description: "A team of skilled thieves enters the dreams of their targets to plant an idea, but as they delve deeper into layers of the subconscious, they confront their own deepest fears and desires."
          },
          {
            title: "Avatar",
            watchtime: 162,
            duration: "long",
            mood: "relaxed",
            genre: "action",
            platformLink: "https://www.amazon.com/Avatar-Special-James-Cameron/dp/B0026OR2UK",
            description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his new home."
          },

          //Sci-Fi

          {
            title: "Back to the Future",
            watchtime: 116,
            mood: "happy",
            genre: "sci-fi",
            platformLink: "https://www.amazon.com/Back-Future-Michael-J-Fox/dp/B003X26KZA",
            duration: "medium"
          },
          {
            title: "The Iron Giant",
            watchtime: 86,
            mood: "happy",
            genre: "sci-fi",
            platformLink: "https://www.amazon.com/Iron-Giant-Vin-Diesel/dp/B004G5I9EQ",
            duration: "short"
          },
          {
            title: "Guardians of the Galaxy",
            watchtime: 121,
            mood: "happy",
            genre: "sci-fi",
            platformLink: "https://www.amazon.com/Guardians-Galaxy-Chris-Pratt/dp/B00KNW3RKC",
            duration: "long"
          },
          {
            title: "Children of Men",
            watchtime: 109,
            mood: "relaxed",
            genre: "sci-fi",
            platformLink: "https://www.amazon.com/Children-Men-Clive-Owen/dp/B000V66D0S",
            duration: "medium"
          },
          {
            title: "The Giver",
            watchtime: 97,
            mood: "relaxed",
            genre: "sci-fi",
            platformLink: "https://www.amazon.com/Giver-Meryl-Streep/dp/B00N6M13QU",
            duration: "short"
          },
          {
            title: "Blade Runner 2049",
            watchtime: 164,
            mood: "relaxed",
            genre: "sci-fi",
            platformLink: "https://www.amazon.com/Blade-Runner-2049-Ryan-Gosling/dp/B074M63BYC",
            duration: "long"
          },
          {
            title: "Edge of Tomorrow",
            watchtime: 113,
            mood: "excited",
            genre: "sci-fi",
            platformLink: "https://www.amazon.com/Edge-Tomorrow-Tom-Cruise/dp/B00SRECEPK",
            duration: "medium"
          },
          {
            title: "Starship Troopers",
            watchtime: 129,
            mood: "excited",
            genre: "sci-fi",
            platformLink: "https://www.amazon.com/Starship-Troopers-Casper-Van-Dien/dp/B01M8PB7BC",
            duration: "long"
          },
          {
            title: "Minority Report",
            watchtime: 95,
            mood: "excited",
            genre: "sci-fi",
            platformLink: "https://www.amazon.com/Minority-Report-Tom-Cruise/dp/B000W7NH1M",
            duration: "short"
          },
          {
            title: "The Martian",
            watchtime: 144,
            mood: "relaxed",
            genre: "sci-fi",
            platformLink: "https://www.amazon.com/The-Martian-Matt-Damon/dp/B014APGAPM",
            duration: "long"
          },
          {
            title: "Moon",
            watchtime: 97,
            mood: "relaxed",
            genre: "sci-fi",
            platformLink: "https://www.amazon.com/Moon-Sam-Rockwell/dp/B002XMJ4EK",
            duration: "short"
          },
          {
            title: "The Adjustment Bureau",
            watchtime: 106,
            mood: "relaxed",
            genre: "sci-fi",
            platformLink: "https://www.amazon.com/Adjustment-Bureau-Matt-Damon/dp/B004J5X8J6",
            duration: "medium"
          },

          //Comedy

          {
            title: "Superbad",
            watchtime: 88,
            duration: "short",
            mood: "happy",
            genre: "comedy",
            platformLink: "https://www.amazon.com/Superbad-Jonah-Hill/dp/B000YYLQLO",
            description: "Two high school friends try to make the most of their final days before graduation, with hilarious antics that explore friendship, love, and growing up."
          },
        
          {
            title: "The Lobster",
            watchtime: 88,
            duration: "short",
            mood: "relaxed",
            genre: "comedy",
            platformLink: "https://www.amazon.com/Lobster-Colin-Farrell/dp/B01G8YQMTG",
            description: "In a dystopian society where single people must find a mate within 45 days or be transformed into an animal, this dark comedy explores love, isolation, and absurdity."
          },
          {
            title: "What We Do in the Shadows",
            watchtime: 86,
            duration: "short",
            mood: "excited",
            genre: "comedy",
            platformLink: "https://www.amazon.com/What-We-Do-Shadows/dp/B00U5N9J7K",
            description: "A hilarious mockumentary about four vampire roommates trying to live in modern-day New Zealand, navigating everything from household chores to the struggles of being undead."
          },
          {
            title: "The Farewell",
            watchtime: 88,
            duration: "short",
            mood: "relaxed",
            genre: "comedy",
            platformLink: "https://www.amazon.com/Farewell-Awkwafina/dp/B07V2D74T8",
            description: "A Chinese-American woman returns to China under the pretense of a fake wedding to spend time with her terminally ill grandmother, blending comedy with heartwarming moments of family connection."
          },
          {
            title: "The Grand Budapest Hotel",
            watchtime: 99,
            duration: "medium",
            mood: "happy",
            genre: "comedy",
            platformLink: "https://www.amazon.com/Grand-Budapest-Hotel-Ralph-Fiennes/dp/B00O46TYWG",
            description: "A quirky comedy about a concierge and his protégé who become involved in a heist, filled with eccentric characters and colorful visuals that create a unique and whimsical adventure."
          },
          {
            title: "Groundhog Day",
            watchtime: 101,
            duration: "medium",
            mood: "relaxed",
            genre: "comedy",
            platformLink: "https://www.amazon.com/Groundhog-Day-Bill-Murray/dp/B0013J4P9M",
            description: "A weatherman relives the same day over and over again while stuck in a small town, gradually learning valuable lessons about life, love, and self-improvement."
          },
          {
            title: "The Big Lebowski",
            watchtime: 117,
            duration: "medium",
            mood: "excited",
            genre: "comedy",
            platformLink: "https://www.amazon.com/Big-Lebowski-Jeff-Bridges/dp/B002X0GVDA",
            description: "A slacker, The Dude, is mistaken for a millionaire with the same name, and gets caught up in a bizarre kidnapping case, full of quirky characters and chaotic events."
          },
          {
            title: "The Secret Life of Walter Mitty",
            watchtime: 114,
            duration: "medium",
            mood: "relaxed",
            genre: "comedy",
            platformLink: "https://www.amazon.com/Secret-Life-Walter-Mitty/dp/B00GZNS6X6",
            description: "A daydreamer embarks on an adventure that takes him to breathtaking places, as he learns to break free from the confines of his imagination and live life to the fullest."
          },
          {
            title: "Forrest Gump",
            watchtime: 142,
            duration: "long",
            mood: "happy",
            genre: "comedy",
            platformLink: "https://www.amazon.com/Forrest-Gump-Tom-Hanks/dp/B001FESQ9Q",
            description: "The story of a man with a low IQ who witnesses and unwittingly influences several historical events in the 20th century, blending humor, drama, and inspirational moments."
          },
          {
            title: "The Truman Show",
            watchtime: 127,
            duration: "long",
            mood: "relaxed",
            genre: "comedy",
            platformLink: "https://www.amazon.com/Truman-Show-Jim-Carrey/dp/B0001CN0S6",
            description: "A man unknowingly lives his life inside a reality TV show. As he starts to notice strange occurrences, he must confront the heartbreaking truth about his existence."
          },
          {
            title: "The Wolf of Wall Street",
            watchtime: 180,
            duration: "long",
            mood: "excited",
            genre: "comedy",
            platformLink: "https://www.amazon.com/Wolf-Wall-Street-Leonardo-DiCaprio/dp/B00HUN5MFA",
            description: "A young stockbroker rises to wealth and power through corruption and excess, creating a hilarious yet satirical portrayal of greed, fraud, and lavish lifestyles."
          },

          {
            title: "Julie & Julia",
            watchtime: 123,
            duration: "long",
            mood: "relaxed",
            genre: "comedy",
            platformLink: "https://www.amazon.com/Julie-Julia-Meryl-Streep/dp/B003JLP8V6",
            description: "The story of a woman who spends a year cooking every recipe from Julia Child's cookbook, blending humor and heartwarming moments as she finds purpose in her culinary journey."
          },

          //Romance

          {
            title: "10 Things I Hate About You",
            watchtime: 97,
            duration: "short",
            mood: "happy",
            genre: "romance",
            platformLink: "https://www.amazon.com/Things-Hate-About-You-Health/dp/B004JH5YAG",
            description: "A modern retelling of Shakespeare's 'The Taming of the Shrew,' this teen romance follows a rebellious high school girl and the charming guy who falls for her despite the odds."
          },
          {
            title: "The Fault in Our Stars",
            watchtime: 125,
            duration: "short",
            mood: "relaxed",
            genre: "romance",
            platformLink: "https://www.amazon.com/Fault-Our-Stars-Shailene-Woodley/dp/B00LBKQY8M",
            description: "A deeply emotional story about two teenagers who fall in love while battling cancer, learning to cope with the trials of illness and the beauty of life and love."
          },
          {
            title: "Crazy, Stupid, Love.",
            watchtime: 118,
            duration: "short",
            mood: "excited",
            genre: "romance",
            platformLink: "https://www.amazon.com/Crazy-Stupid-Love-Stevecarell/dp/B005J0J0PY",
            description: "A hilarious, fast-paced romantic comedy about a recently-divorced man learning how to date again with the help of a charming bachelor, leading to unexpected love and laughter."
          },
          {
            title: "Before Sunrise",
            watchtime: 101,
            duration: "short",
            mood: "relaxed",
            genre: "romance",
            platformLink: "https://www.amazon.com/Before-Sunrise-Ethan-Hawke/dp/B00ASW67B8",
            description: "Two strangers meet on a train in Europe and spend a day walking around Vienna, forming an unforgettable connection that explores life, love, and fleeting moments."
          },
          {
            title: "La La Land",
            watchtime: 128,
            duration: "medium",
            mood: "happy",
            genre: "romance",
            platformLink: "https://www.amazon.com/La-Land-Ryan-Gosling/dp/B01LYF8WKB",
            description: "A jazz musician and an aspiring actress fall in love while chasing their dreams in Los Angeles, blending stunning music and dance sequences with a bittersweet romance."
          },
          {
            title: "Titanic",
            watchtime: 195,
            duration: "medium",
            mood: "relaxed",
            genre: "romance",
            platformLink: "https://www.amazon.com/Titanic-Leonardo-DiCaprio/dp/B0007XJRI0",
            description: "A timeless epic about a romance blossoming aboard the ill-fated R.M.S. Titanic, this film blends a passionate love story with the devastating tragedy of the ship's sinking."
          },
          {
            title: "Love Actually",
            watchtime: 135,
            duration: "medium",
            mood: "excited",
            genre: "romance",
            platformLink: "https://www.amazon.com/Love-Actually-Hugh-Grant/dp/B002W5WOSW",
            description: "A heartwarming and humorous film that explores the intertwined lives of various characters in the weeks leading up to Christmas, showcasing love in all its forms."
          },
          {
            title: "The Vow",
            watchtime: 104,
            duration: "medium",
            mood: "relaxed",
            genre: "romance",
            platformLink: "https://www.amazon.com/Vow-Channing-Tatum/dp/B006CNU28E",
            description: "A couple faces an emotional challenge when the wife loses her memory in an accident, and the husband must try to win her love again as they rebuild their life together."
          },
          {
            title: "The Princess Bride",
            watchtime: 98,
            duration: "long",
            mood: "happy",
            genre: "romance",
            platformLink: "https://www.amazon.com/Princess-Bride-Cary-Elwes/dp/B003TIE0OQ",
            description: "A swashbuckling fairy tale with romance, action, and humor, where a young woman is rescued by her true love, embarking on an adventure to defeat evil and live happily ever after."
          },
          {
            title: "The Notebook",
            watchtime: 123,
            duration: "long",
            mood: "relaxed",
            genre: "romance",
            platformLink: "https://www.amazon.com/Notebook-Ryan-Gosling/dp/B002BBJ11G",
            description: "A passionate and heartbreaking romance about a young couple whose love is tested over the years, exploring themes of memory, family, and enduring love."
          },
          {
            title: "Maid in Manhattan",
            watchtime: 105,
            duration: "long",
            mood: "excited",
            genre: "romance",
            platformLink: "https://www.amazon.com/Maid-Manhattan-Jennifer-Lopez/dp/B0029TXR0O",
            description: "A charming romantic comedy where a hotel maid and a wealthy politician fall in love, only to find their social status complicating their connection."
          },
          {
            title: "Pride and Prejudice",
            watchtime: 129,
            duration: "long",
            mood: "relaxed",
            genre: "romance",
            platformLink: "https://www.amazon.com/Pride-Prejudice-Keira-Knightley/dp/B000LRFNOO",
            description: "A beautiful adaptation of Jane Austen's classic novel, where Elizabeth Bennet and Mr. Darcy struggle with misunderstandings and pride before discovering a love that transcends their differences."
          }
  ];
  