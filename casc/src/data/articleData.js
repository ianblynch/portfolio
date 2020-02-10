import adaptedStrengthTrainingImg from '../assets/adapted-strength-training-web-800.jpg'
import royalsImg from '../assets/cincinnati-royals-web-800.jpg'
import handcyclingImg from '../assets/handcycling-web-800.jpg'
import wheelchairFootballImg from '../assets/wheelchair-football-web-800.jpg'
import adaptedBowlingImg from '../assets/adapted-bowling-web-800.jpg'
import adaptedEquestrianImg from '../assets/adapted-equestrian-web-800.jpg'
import adaptedSwimmingImg from '../assets/adapted-swimming-web-800.jpg'
import movinAndGroovinImg from '../assets/movin-and-groovin-web-800.jpg'
import paralympicGoalballImg from '../assets/paralympic-goalball-web-800.jpg'
import specialOlympicsBasketballImg from '../assets/special-olympics-basketball-web-800.jpg'
import womenWorkoutImg from '../assets/women-workout-web-800.jpg'
import dragonsVarsityImg from '../assets/dragons-varsity-web-800.jpg'
import dragonsPrepImg from '../assets/dragons-prep-web-800.jpg'
import powerSoccerImg from '../assets/power-soccer-web-800.jpg'
import sledHockeyImg from '../assets/sled-hockey-web-800.jpg'
import wheelchairTennisImg from '../assets/wheelchair-tennis-web-800.jpg'

export const LIST = 'LIST'
export const PARAGRAPH = 'PARAGRAPH'
export const CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20 = '[2019/2020 CRC Therapeutic Recreation Fall &amp; Winter Program Guide](https://www.cincinnati-oh.gov/recreation/programs/therapeutic-recreation/2019-2020-tr-fall-winter-program-guide/)'

export const articleData = [
    {
      id: 0,
      name: 'Adapted Aquatics Learn-to-Swim Program',
      filterTags: [
        {group: 'filter-tag-age-group', value: 'any-age-group'},
        {group: 'filter-tag-disability-group', value: 'any-disability'},
        {group: 'filter-tag-competition-group', value: 'any-competition'},
        {group: 'filter-tag-age-group', value: 'youth'},
        {group: 'filter-tag-age-group', value: 'teen'},
        {group: 'filter-tag-age-group', value: 'adult'},
        {group: 'filter-tag-competition-group', value: 'recreational'},
        {group: 'filter-tag-disability-group', value: 'physical-disability'},
        {group: 'filter-tag-disability-group', value: 'intellectual-disability'}
      ],
      image: {
        src: adaptedSwimmingImg,
        alt: 'A smiling participant swimming with an instructor.',
        objectPosition: 'center'
      },
      description: {
        elements: [
          {
            type: PARAGRAPH,
            text: `Our Adapted Aquatics Program is coordinated by Eric Rueger, WSI. His core teams of qualified and experienced instructors are committed to creating positive aquatic experiences for all ages and ability levels. The program is individually designed to include all ability levels by incorporating the Red Cross Swim Progression and TR Sequential Swim Progression.`
          },
          {
            type: PARAGRAPH,
            text: `Swimmers learn American Red Cross Aquatics Levels I, II, and III swim skills- while the ultimate goals include:`
          },
          {
            type: LIST,
            items: [
            'Safe, independent play in the water', 
            'Participation in traditional, inclusive swim lesson programs',
            'Competitive/Non-Competitive participation in Special Olympics or other swim team in the community'
          ] 
          },
          {
            type: PARAGRAPH,
            text: `Each swimmer receives individualized, progressive strategies and teaching methods that make learning achievable, sensory integrative, and fun for all. Participants are taught swim skills, water safety, and independence. We will keep specific learning types and considerations in mind while structuring lessons, and provide visual, auditory, and sensory stimulation based on the needs of the individual.`
          },
          {
            type: PARAGRAPH,
            text: `In conjunction we offer a free Parent Learn-to-Swim Program as well as Learn-to-Swim as part of the school day with local partner schools. See the ${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20} for additional information on these supplementary offerings.`
          }
        ],
      },
      who: 'Participants are individuals with physical, neurological, developmental, and cognitive impairments ages 3 and older.',
      organizations: ['Cincinnati Recreation Commission (CRC)'],
      when: `Lessons are on Tuesdays, Thursdays, and Saturdays. See the ${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20} for specific session dates.`,
      where: [
        {
          src: 'https://goo.gl/maps/qf3uqddk2AE2',
          address: 'Mt. Auburn Pool, 2034 Young St, Cincinnati, OH 45219'
        }
      ],
      contact:[
        {
          name: 'Eric Rueger',
          email: 'eric.rueger@cincinnati-oh.gov',
          phone: '(513)352-4971',
          tel: '5133524971'
        }
      ],
      links: [
        CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20
      ]
    },
    {
      id: 1,
      name: 'Adapted Strength Training',
      filterTags: [
        {group: 'filter-tag-age-group', value: 'any-age-group'},
        {group: 'filter-tag-disability-group', value: 'any-disability'},
        {group: 'filter-tag-competition-group', value: 'any-competition'},
        {group: 'filter-tag-age-group', value: 'teen'},
        {group: 'filter-tag-age-group', value: 'adult'},
        {group: 'filter-tag-competition-group', value: 'recreational'},
        {group: 'filter-tag-disability-group', value: 'physical-disability'},
      ],
      image: {
        src: adaptedStrengthTrainingImg,
        alt: 'A participant and 2 specialists posing for a picture after working out.',
        objectPosition: 'top'
      },
      description: {
        elements: [
          {
            type: PARAGRAPH,
            text: `**Join us at the Corryville Recreation Center to Get Fit!** This facility hosts fully accessible weight machines for those individuals that usa a wheelchair for mobility. The program provides an on-site trainer to introduce participants to the equipment, and to help with adapting exercises for individuals with disabilities.`
          },
          {
            type: PARAGRAPH,
            text: `**Prior to attending, potential participants must schedule an appointment with a Recreation Therapist for evaluation.** Participants must register for a specific time slot and will only be permitted to attend during their time slot. This is so that the on-site trainer is able to give everyone their utmost attention. Please review the ${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20} for full details.`
          }
        ],
      },
      who: 'Participants with physical disabilities ages 14 and older.',
      organizations: ['Cincinnati Recreation Commission (CRC)'],
      when: `Mondays &amp; Wednesdays, from 4pm to 5pm or 5pm to 6pm. Fall Session: September to December; Winter Session: January to March.`,
      where: [
        {
          src: 'https://goo.gl/maps/hLu32geUGBP2',
          address: 'Corryville Recreation Center, 2823 Eden Ave, Cincinnati, OH 45219'
        }
      ],
      contact:[
        {
          name: 'Taylor Singleton',
          phone: '(513)352-4056',
          tel: '5133524056'
        }
      ],
      links: [
        CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20
      ]
    },
    {
      id: 2,
      name: 'The Bulls Competitive TR Basketball',
      filterTags: [
        {group: 'filter-tag-age-group', value: 'any-age-group'},
        {group: 'filter-tag-disability-group', value: 'any-disability'},
        {group: 'filter-tag-competition-group', value: 'any-competition'},
        {group: 'filter-tag-age-group', value: 'teen'},
        {group: 'filter-tag-age-group', value: 'adult'},
        {group: 'filter-tag-competition-group', value: 'competitive'},
        {group: 'filter-tag-disability-group', value: 'intellectual-disability'},
      ],
      image: {
        src: specialOlympicsBasketballImg,
        alt: 'Special Olympics athletes playing a basketball game.',
        objectPosition: 'center'
      },
      description: {
        elements: [
          {
            type: PARAGRAPH,
            text: `The TR Basketball Program is designed for **competitive-level athletes** with the skills and knowledge to play regulation basketball.  Games are scheduled against area Special Olympic teams.  The season concludes with regional and state tournaments.  Each athlete must have a current **Special Olympic Medical Release** in order to participate.  See the ${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20} for registration details.`
          }
        ],
      },
      who: 'Participants ages 16 and older.',
      organizations: ['Cincinnati Recreation Commission (CRC)'],
      when: 'Thursdays from 6:30pm to 8:30pm. September to March.',
      where: [
        {
          src: 'https://goo.gl/maps/hLu32geUGBP2',
          address: 'Corryville Recreation Center, 2823 Eden Ave, Cincinnati, OH 45219'
        }
      ],
      contact:[
        {
          name: 'Keir Griffith',
          phone: '(513)675-6392',
          tel: '5136756392'
        }
      ],
      links: [
        CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20
      ]
    },
    {
      id: 3,
      name: 'Cincinnati Dragons Wheelchair Basketball Varsity Team',
      filterTags: [
        {group: 'filter-tag-age-group', value: 'any-age-group'},
        {group: 'filter-tag-disability-group', value: 'any-disability'},
        {group: 'filter-tag-competition-group', value: 'any-competition'},
        {group: 'filter-tag-age-group', value: 'teen'},
        {group: 'filter-tag-competition-group', value: 'competitive'},
        {group: 'filter-tag-disability-group', value: 'physical-disability'},
      ],
      image: {
        src: dragonsVarsityImg,
        alt: 'Action picture of a Cincinnati Dragons Varsity player shooting the ball.',
        objectPosition: 'bottom'
      },
      description: {
        elements: [
          {
            type: PARAGRAPH,
            text: 'A competitive co-ed wheelchair basketball team for middle and high school age athletes. It is very similar to a high school basketball team. The team travels around the region playing games and competes in the National Wheelchair Basketball Association&#39;s Varsity Division. It is competitive and focuses on teamwork, leadership, sportsmanship, and independence.'
          }
        ],
      },
      who: 'Any person with a permanent physical disability affecting their lower limbs who can move themselves using a manual wheelchair. The minimum age is 14 and the maximum age is 18 or still in high school.',
      organizations: [
        'Greater Cincinnati Adapted Sports Club',
        'Cincinnati Recreation Commission (CRC)'
      ],
      when: 'The team practices year-round, but the competitive season is September through April. Practices are Saturday afternoons from 2:30pm-5:00pm.',
      where: [
        {
          src: 'https://goo.gl/maps/ta3tEjVBhuQ2',
          address: 'LeBlond Recreation Center, 2335 Riverside Dr, Cincinnati, OH 45202'
        }
      ],
      contact:[
        {
          name: 'Jacob Counts',
          phone: '(859)414-1577',
          tel: '5136756392',
          email: 'gcasc8@gmail.com'
        }
      ],
      links: [
        '[Cincinnati Dragons Wheelchair Basketball](http://www.cincinnatidragons.com)',
        '[Cincinnati Dragons Facebook Page](http://www.facebook.com/gcasc)'
      ]
    },
    {
      id: 4,
      name: 'Cincinnati Dragons Wheelchair Basketball Prep Team',
      filterTags: [
        {group: 'filter-tag-age-group', value: 'any-age-group'},
        {group: 'filter-tag-disability-group', value: 'any-disability'},
        {group: 'filter-tag-competition-group', value: 'any-competition'},
        {group: 'filter-tag-age-group', value: 'youth'},
        {group: 'filter-tag-competition-group', value: 'competitive'},
        {group: 'filter-tag-competition-group', value: 'recreational'},
        {group: 'filter-tag-disability-group', value: 'physical-disability'},
      ],
      image: {
        src: dragonsPrepImg,
        alt: 'Picture of Cincinnati Dragons Prep Team winning a trophy.',
        objectPosition: 'center'
      },
      description: {
        elements: [
          {
            type: PARAGRAPH,
            text: 'A competitive co-ed wheelchair basketball team for elementary and middle school age athletes. It is very similar to an elementary school basketball team. The team travels around the region playing games and competes in the National Wheelchair Basketball Association Prep Division. It is competitive and focuses on teamwork, leadership, sportsmanship, and independence.'
          }
        ],
      },
      who: 'Any person with a permanent physical disability affecting their lower limbs who can move themselves using a manual wheelchair. The minimum age is 5 and the maximum age is 14.',
      organizations: [
        'Greater Cincinnati Adapted Sports Club',
        'Cincinnati Recreation Commission (CRC)'
      ],
      when: 'The team practices year-round, but the competitive season is September through April. Practices are Saturday afternoons from 1:00pm-2:30pm.',
      where: [
        {
          src: 'https://goo.gl/maps/ta3tEjVBhuQ2',
          address: 'LeBlond Recreation Center, 2335 Riverside Dr, Cincinnati, OH 45202'
        }
      ],
      contact:[
        {
          name: 'Jacob Counts',
          phone: '(859)414-1577',
          tel: '5136756392',
          email: 'gcasc8@gmail.com'
        }
      ],
      links: [
        '[Cincinnati Dragons Wheelchair Basketball](http://www.cincinnatidragons.com)',
        '[Cincinnati Dragons Facebook Page](http://www.facebook.com/gcasc)'
      ]
    },
    {
      id: 5,
      name: 'Cincinnati Royals Wheelchair Basketball Adult Team',
      filterTags: [
        {group: 'filter-tag-age-group', value: 'any-age-group'},
        {group: 'filter-tag-disability-group', value: 'any-disability'},
        {group: 'filter-tag-competition-group', value: 'any-competition'},
        {group: 'filter-tag-age-group', value: 'teen'},
        {group: 'filter-tag-age-group', value: 'adult'},
        {group: 'filter-tag-competition-group', value: 'competitive'},
        {group: 'filter-tag-competition-group', value: 'recreational'},
        {group: 'filter-tag-disability-group', value: 'physical-disability'},
      ],
      image: {
        src: royalsImg,
        alt: 'An official team photo of the Royals wheelchair basketball team.',
        objectPosition: 'center'
      },
      description: {
        elements: [
          {
            type: PARAGRAPH,
            text: `Wheelchair Basketball is back in Cincinnati! Come be a part of the **Cincinnati Royals Basketball Team!  This will be our fourth year competing in the National Wheelchair Basketball Association.** See the ${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20} for registration details.`
          }
        ],
      },
      who: 'Participants with physical disabilities ages 14 and older who can propel their wheelchair without assistance from a motor.',
      organizations: [
        'Cincinnati Recreation Commission (CRC)'
      ],
      when: 'Tuesdays from 6:30pm to 8:30pm. September to April',
      where: [
        {
          src: 'https://goo.gl/maps/ta3tEjVBhuQ2',
          address: 'LeBlond Recreation Center, 2335 Riverside Dr, Cincinnati, OH 45202'
        }
      ],
      contact:[
        {
          name: 'Jacob Counts',
          phone: '(859)414-1577',
          tel: '5136756392',
        }
      ],
      links: [
        `${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20}`,
        '[Cincinnati Royals Facebook Page](https://www.facebook.com/Cincinnati-Royals-Wheelchair-Basketball-Team-200737013812804)'
      ]
    },
    {
      id: 6,
      name: 'Goalball',
      filterTags: [
        {group: 'filter-tag-age-group', value: 'any-age-group'},
        {group: 'filter-tag-disability-group', value: 'any-disability'},
        {group: 'filter-tag-competition-group', value: 'any-competition'},
        {group: 'filter-tag-age-group', value: 'youth'},
        {group: 'filter-tag-age-group', value: 'teen'},
        {group: 'filter-tag-age-group', value: 'adult'},
        {group: 'filter-tag-competition-group', value: 'competitive'},
        {group: 'filter-tag-competition-group', value: 'recreational'},
        {group: 'filter-tag-disability-group', value: 'visual-disability'},
      ],
      image: {
        src: paralympicGoalballImg,
        alt: 'A blindfolded athlete rolling a goalball in front of a goal.',
        objectPosition: 'top'
      },
      description: {
        elements: [
          {
            type: PARAGRAPH,
            text: `Goalball is a competitive sport played three-against-three, indoors on a gym floor- **primarily by blind and visually impaired athletes.** A rubber ball with bells inside is used so that the players can track the ball.  This game is played at the local school gym level, all the way up to the Paralympic level- internationally by Team USA.  Even if you don't have a visual impairment, you can participate in this amazing sport!  Come out and give this awesome game a try!  See the ${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20} for registration details.`
          }
        ],
      },
      who: 'Participants ages 8 and older and are blind or have a visual impairment.',
      organizations: [
        'Cincinnati Recreation Commission (CRC)'
      ],
      when: 'Wednesdays from 6:30pm to 8:30pm. October to February.',
      where: [
        {
          src: 'https://goo.gl/maps/ta3tEjVBhuQ2',
          address: 'LeBlond Recreation Center, 2335 Riverside Dr, Cincinnati, OH 45202'
        }
      ],
      contact:[
        {
          name: 'Kristen McMahon',
          phone: '(513)352-4629',
          tel: '5133524629',
        }
      ],
      links: [
        `${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20}`
      ]
    },
    {
      id: 7,
      name: 'Handcycling',
      filterTags: [
        {group: 'filter-tag-age-group', value: 'any-age-group'},
        {group: 'filter-tag-disability-group', value: 'any-disability'},
        {group: 'filter-tag-competition-group', value: 'any-competition'},
        {group: 'filter-tag-age-group', value: 'adult'},
        {group: 'filter-tag-competition-group', value: 'recreational'},
        {group: 'filter-tag-disability-group', value: 'physical-disability'},
      ],
      image: {
        src: handcyclingImg,
        alt: 'A group photo of handcyclists on the trail.',
        objectPosition: 'bottom'
      },
      description: {
        elements: [
          {
            type: PARAGRAPH,
            text: `Come out and ride handcycles with a group of individuals with physical disabilities. Space is limited in this program since we have limited handcycles. We will ride around the Lunken Playfield Bike Trail, enjoying scenery and fresh air while actually participating in a Paralympic Sport! Please call Kristen McMahon before registering to assure that there is space available in the program. See the ${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20} for registration information.`
          }
        ],
      },
      who: 'Participants are individuals with physical disabilities, ages 18 and older who can independently move their arms.',
      organizations: [
        'Cincinnati Recreation Commission (CRC)'
      ],
      when: 'Mondays 10:00am to noon. Session is October to September.',
      where: [
        {
          src: 'https://goo.gl/maps/1KXT5iNGwR82',
          address: 'Lunken Playfield, 4740 Playfield Ln, Cincinnati, OH 45226'
        }
      ],
      contact:[
        {
          name: 'Kristen McMahon',
          phone: '(513)352-4629',
          tel: '5133524629',
        }
      ],
      links: [
        `${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20}`
      ]
    },
    {
      id: 8,
      name: 'Milestones, Inc. Equestrian Achievement Program',
      filterTags: [
        {group: 'filter-tag-age-group', value: 'any-age-group'},
        {group: 'filter-tag-disability-group', value: 'any-disability'},
        {group: 'filter-tag-competition-group', value: 'any-competition'},
        {group: 'filter-tag-age-group', value: 'youth'},
        {group: 'filter-tag-age-group', value: 'teen'},
        {group: 'filter-tag-age-group', value: 'adult'},
        {group: 'filter-tag-competition-group', value: 'recreational'},
        {group: 'filter-tag-disability-group', value: 'physical-disability'},
        {group: 'filter-tag-disability-group', value: 'intellectual-disability'}
      ],
      image: {
        src: adaptedEquestrianImg,
        alt: 'Three equestrian athletes riding horses.',
        objectPosition: 'center'
      },
      description: {
        elements: [
          {
            type: PARAGRAPH,
            text: 'Milestones is a therapeutic horseback riding program. Our mission is to improve the cognitive, physical, psychological, and emotional health of individuals with challenges by providing opportunities for growth. We assist each rider to become an innovative and productive member of the community by building independence, self-confidence, strength, and social skills in a safe, fun, and loving environment.'
          }
        ],
      },
      who: 'Milestones offers opportunities for individuals who are least 3 years of age or older with varying challenges or special needs. Many of our riders come to us with emotional, phycological, cognitive, and physical challenges.',
      organizations: [
        'Milestones, Inc.'
      ],
      when: 'Milestones offers all year-round therapeutic riding lessons. Therapeutic lessons are offered once per week and typically occur in the later afternoon or evening hours.',
      where: [
        {
          src: 'https://goo.gl/maps/EtFScdD18bk',
          address: '12372 Riggs Road, Independence, KY 41051'
        }
      ],
      contact:[
        {
          name: 'Milestones, Inc',
          phone: '(859)694-7669',
          tel: '8596947669',
          email: 'scheduling@milestonesinc.org'
        }
      ],
      links: [
        '[Milestones, Inc.](http://www.www.milestonesinc.org)'
      ]
    },
    {
      id: 9,
      name: `Movin&#39; &amp; Groovin&#39; Health &amp; Wellness Sampler`,
      filterTags: [
        {group: 'filter-tag-age-group', value: 'any-age-group'},
        {group: 'filter-tag-disability-group', value: 'any-disability'},
        {group: 'filter-tag-competition-group', value: 'any-competition'},
        {group: 'filter-tag-age-group', value: 'adult'},
        {group: 'filter-tag-competition-group', value: 'recreational'},
        {group: 'filter-tag-disability-group', value: 'physical-disability'},
        {group: 'filter-tag-disability-group', value: 'intellectual-disability'}
      ],
      image: {
        src: movinAndGroovinImg,
        alt: 'Several participants exercising in a Zumba class.',
        objectPosition: 'center'
      },
      description: {
        elements: [
          {
            type: PARAGRAPH,
            text: `Get movin&#39; and groovin&#39; with this sampler of fun activities such as dancing, Zumba, exercise, etc.  This weekly health and wellness group will help you achieve your goals and help you stay active in the winter months! Come join the fun!  See the ${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20} for registration details.`
          }
        ],
      },
      who: 'Participants ages 18 and older.',
      organizations: [
        'Cincinnati Recreation Commission (CRC)'
      ],
      when: 'Wednesdays from 7:00pm to 8:30pm. October to November.',
      where: [
        {
          src: 'https://goo.gl/maps/ta3tEjVBhuQ2',
          address: 'LeBlond Recreation Center, 2335 Riverside Dr, Cincinnati, OH 45202'
        }
      ],
      contact:[
        {
          name: 'Tricia Nelson',
          phone: '(513)352-4629',
          tel: '5133524629'
        }
      ],
      links: [
        `${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20}`
      ]
    },
    {
      id: 10,
      name: `Teen/Young Adult Women Workout Group`,
      filterTags: [
        {group: 'filter-tag-age-group', value: 'any-age-group'},
        {group: 'filter-tag-disability-group', value: 'any-disability'},
        {group: 'filter-tag-competition-group', value: 'any-competition'},
        {group: 'filter-tag-age-group', value: 'adult'},
        {group: 'filter-tag-competition-group', value: 'recreational'},
        {group: 'filter-tag-disability-group', value: 'physical-disability'}
      ],
      image: {
        src: womenWorkoutImg,
        alt: 'A woman lifting weights while another woman spots her.',
        objectPosition: 'center'
      },
      description: {
        elements: [
          {
            type: PARAGRAPH,
            text: `**This new program is for teens and young adult women with physical disabilities who would like to get fit and hang out with friends while they are doing it!** Join us at the Corryville Recreation Center which has fully accessible weight machines for those individuals that use a wheelchair for more mobility. The program provides an on-site trainer to introduce participants to the equipment, and to help with adapting exercises for them. See the ${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20} for registration information.`
          }
        ],
      },
      who: 'Participants with physical disabilities ages 14 and older.',
      organizations: [
        'Cincinnati Recreation Commission (CRC)'
      ],
      when: 'Wednesdays from 6:00pm to 7:00pm. Fall Session: September to December; Winter Session: January to March.',
      where: [
        {
          src: 'https://goo.gl/maps/hLu32geUGBP2',
          address: 'Corryville Recreation Center, 2823 Eden Ave, Cincinnati, OH 45219'
        }
      ],
      contact:[
        {
          name: 'Taylor Singleton',
          phone: '(513)352-4056',
          tel: '5133524056'
        }
      ],
      links: [
        `${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20}`
      ]
    },
    {
      id: 11,
      name: 'TR Bowling',
      filterTags: [
        {group: 'filter-tag-age-group', value: 'any-age-group'},
        {group: 'filter-tag-disability-group', value: 'any-disability'},
        {group: 'filter-tag-competition-group', value: 'any-competition'},
        {group: 'filter-tag-age-group', value: 'youth'},
        {group: 'filter-tag-age-group', value: 'teen'},
        {group: 'filter-tag-age-group', value: 'adult'},
        {group: 'filter-tag-competition-group', value: 'competitive'},
        {group: 'filter-tag-competition-group', value: 'recreational'},
        {group: 'filter-tag-disability-group', value: 'physical-disability'},
        {group: 'filter-tag-disability-group', value: 'intellectual-disability'}
      ],
      image: {
        src: adaptedBowlingImg,
        alt: 'Adapted bowlers having fun and using an assistive device.',
        objectPosition: 'center'
      },
      description: {
        elements: [
          {
            type: PARAGRAPH,
            text: `Participating in our Bowling Program is a wonderful way to improve your health and fitness!  Bowlers of all experience levels are encouraged to participate in this inclusive program- family and friends are welcome too.  Come out to Brentwood Bowl on Saturday afternoons and join in on the fun! See the ${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20} for registration information.`
          },
          {
            type: PARAGRAPH,
            text:`**Team Bowling:** designed for competitive level bowlers who wish to be on a bowling team and participate in the league.  **Weekly attendance is required to participate on a team.**  Each athlete will be placed on a team by the league coordinator.`
          },
          {
            type: PARAGRAPH,
            text:`**Open Bowling:** designed for beginners and/or those who are unable to attend on a weekly basis.  Friends and family are encouraged to register and participate in this program.`
          },
          {
            type: PARAGRAPH,
            text:`**Adapted Bowling:** designed for individuals with physical disabilities.  Bowling ramps are available.`
          },
          {
            type: PARAGRAPH,
            text:`**Junior Bowling:** for younger bowlers (ages 6-17) and is designed to give them a chance to experience the fun and excitement of bowling.  Bumper lanes and ramps are available.  Friends and family are encouraged to register and participate in this proram.  **We do request parent/guardian attendance throughout the program.**`
          }
        ],
      },
      who: 'Participants ages 6 and older.',
      organizations: [
        'Cincinnati Recreation Commission (CRC)'
      ],
      when: 'Saturdays from 11:45am to 2:00pm. October to April',
      where: [
        {
          src: 'https://goo.gl/maps/spxfrJQao8M2',
          address: 'Brentwood Bowl, 9176 Winton Rd, Cincinnati, OH 45231'
        }
      ],
      contact:[
        {
          name: 'Teresa Miller',
          phone: '(513)352-4962',
          tel: '5133524962'
        }
      ],
      links: [
        `${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20}`
      ]
    },
    {
      id: 12,
      name: 'Wheelchair Football',
      filterTags: [
        {group: 'filter-tag-age-group', value: 'any-age-group'},
        {group: 'filter-tag-disability-group', value: 'any-disability'},
        {group: 'filter-tag-competition-group', value: 'any-competition'},
        {group: 'filter-tag-age-group', value: 'youth'},
        {group: 'filter-tag-age-group', value: 'teen'},
        {group: 'filter-tag-age-group', value: 'adult'},
        {group: 'filter-tag-competition-group', value: 'recreational'},
        {group: 'filter-tag-disability-group', value: 'physical-disability'}
      ],
      image: {
        src: wheelchairFootballImg,
        alt: 'An athlete in a wheelchair throwing a football.',
        objectPosition: 'top'
      },
      description: {
        elements: [
          {
            type: PARAGRAPH,
            text: `Just about anyone can play this sport: a person who has a physical disability and uses a wheelchair (power or manual), people without disabilities, and family and friends. We have extra sports wheelchairs available for anyone that doesn't have their own so that anyone can participate in this "pick-up" style game. Wheelchair football is a very inclusive game and accommodates athletes of all disabilities. Each Saturday the rules will be adapted to fit the group that comes to play, allowing everyone to be included.  See the ${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20} for registration details.`
          }          
        ],
      },
      who: 'Participants ages 8 and older.',
      organizations: [
        'Cincinnati Recreation Commission (CRC)'
      ],
      when: 'Saturdays from 10:30am to 12:15pm. September to May',
      where: [
        {
          src: 'https://goo.gl/maps/ta3tEjVBhuQ2',
          address: 'LeBlond Recreation Center, 2335 Riverside Dr, Cincinnati, OH 45202'
        }
      ],
      contact:[
        {
          name: 'Alayne Kazin',
          phone: '(513)352-4945',
          tel: '5133524945'
        }
      ],
      links: [
        `${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20}`
      ]
    },
    {
      id: 13,
      name: 'Cincinnati Power Soccer',
      filterTags: [
        {group: 'filter-tag-age-group', value: 'any-age-group'},
        {group: 'filter-tag-disability-group', value: 'any-disability'},
        {group: 'filter-tag-competition-group', value: 'any-competition'},
        {group: 'filter-tag-age-group', value: 'youth'},
        {group: 'filter-tag-age-group', value: 'teen'},
        {group: 'filter-tag-age-group', value: 'adult'},
        {group: 'filter-tag-competition-group', value: 'recreational'},
        {group: 'filter-tag-competition-group', value: 'competitive'},
        {group: 'filter-tag-disability-group', value: 'physical-disability'}
      ],
      image: {
        src: powerSoccerImg,
        alt: 'Two athletes playing power soccer.',
        objectPosition: 'top'
      },
      description: {
        elements: [
          {
            type: PARAGRAPH,
            text: `Power Soccer is the first competitive team sport designed and developed specifically for power wheelchair users. Athlete’s disabilities include quadriplegia, multiple sclerosis, muscular dystrophy, cerebral palsy, and many others. The game is played in a gymnasium on a regulation basketball court. Two teams of four players each attack, defend, and spin-kick a 13-inch soccer ball in a challenging game similar to able-bodied soccer.`
          }          
        ],
      },
      who: 'Participants ages 6 and older.',
      organizations: [
        "Greater Cincinnati Adapted Sports Club",
        'Cincinnati Recreation Commission (CRC)'
      ],
      when: 'Saturdays from 11:30am to 1:00pm. Oct 26, 2019 to March 28, 2020',
      where: [
        {
          src: 'https://goo.gl/maps/ta3tEjVBhuQ2',
          address: 'LeBlond Recreation Center, 2335 Riverside Dr, Cincinnati, OH 45202'
        }
      ],
      contact:[
        {
          name: 'Jake Counts',
          phone: '(859)414-1577',
          tel: '8594141577'
        }
      ],
      links: [
        `${CRC_TR_GUIDE_LINK_FALL_WINTER_2019_20}`
      ]
    },
    {
      id: 14,
      name: 'Cincinnati Ice Breakers Sled Hockey',
      filterTags: [
        {group: 'filter-tag-age-group', value: 'any-age-group'},
        {group: 'filter-tag-disability-group', value: 'any-disability'},
        {group: 'filter-tag-competition-group', value: 'any-competition'},
        {group: 'filter-tag-age-group', value: 'youth'},
        {group: 'filter-tag-age-group', value: 'teen'},
        {group: 'filter-tag-age-group', value: 'adult'},
        {group: 'filter-tag-competition-group', value: 'recreational'},
        {group: 'filter-tag-competition-group', value: 'competitive'},
        {group: 'filter-tag-disability-group', value: 'physical-disability'}
      ],
      image: {
        src: sledHockeyImg,
        alt: 'An athlete playing sled hockey.',
        objectPosition: 'top'
      },
      description: {
        elements: [
          {
            type: PARAGRAPH,
            text: `Sled hockey (also called ‘Sledge’ outside the U.S.) is an adaptive form of ice hockey for youth and adults who cannot skate in a standing position due to a physical disability. Players sit in ‘bucket seats’ that sit on top of two hockey skate blades. There are two sticks for each player. These modified sticks have a hockey skate blade on one end for hitting the puck and metal pics on the other end for propelling themselves. Goalies wear basically the same equipment and sit in a sled but make modifications to their gloves to assist them in maneuverability.`
          },
          {
            type: PARAGRAPH,
            text: `All the equipment and protective gear are provided each season.  Those players who have fallen in love with the sport personally purchased or used grants to purchase their own equipment and protective gear.`
          },
          {
            type: PARAGRAPH,
            text: `Modifications and adaptations to the sled and sticks are a part of what we provide so each player can participate as fully as possible during practice and games.`
          },
          {
            type: PARAGRAPH,
            text: `Our volunteer staff (everyone including coaches are volunteers) are SAFESPORT certified, coaching certified by USA Hockey (the national governing body for ice hockey and inline hockey in the US), have been formally screened by the district (USA Hockey mandate) and have experience in both working with persons with a physical disability and ice hockey.`
          } 
        ],
      },
      who: 'Participants ages 4+ (based on child\'s ability to follow basic instruction and attend long enough to learn how to use the sled and sticks!)',
      organizations: [
        "Cincinnati Ice Breakers"
      ],
      when: 'Practices begin in September and run through the end of February.  There is an end of the year party with a hockey scrimmage as well as a Jamboree (one fun day of sled hockey with players from around the region) in March.  Practice time starts at 7:15pm and ends 8:15pm-8:45pm (younger players typically get off the ice at 8:15pm)',
      where: [
        {
          src: 'https://goo.gl/maps/bKUBJL39qvGoTD1RA',
          address: 'Sports Plus, 10765 Reading Rd, Cincinnati, OH'
        }
      ],
      contact:[
        {
          name: 'Renee Loftspring',
          email: 'cincinnatisledhockey@gmail.com',
          phone: '(513)518-6716',
          tel: '5135186716'
        }
      ],
      links: [
        "[cincinnatisledhockey.org](http://www.cincinnatisledhockey.org)"
      ]
    },
    {
      id: 15,
      name: 'Wheelchair Tennis',
      filterTags: [
        {group: 'filter-tag-age-group', value: 'any-age-group'},
        {group: 'filter-tag-disability-group', value: 'any-disability'},
        {group: 'filter-tag-competition-group', value: 'any-competition'},
        {group: 'filter-tag-age-group', value: 'youth'},
        {group: 'filter-tag-age-group', value: 'teen'},
        {group: 'filter-tag-age-group', value: 'adult'},
        {group: 'filter-tag-competition-group', value: 'recreational'},
        {group: 'filter-tag-competition-group', value: 'competitive'},
        {group: 'filter-tag-disability-group', value: 'physical-disability'}
      ],
      image: {
        src: wheelchairTennisImg,
        alt: 'An athlete playing wheelchair tennis.',
        objectPosition: 'top'
      },
      description: {
        elements: [
          {
            type: PARAGRAPH,
            text: `Wheelchair tennis is for athletes with physical disabilities using a wheelchair.  It is recreational and competitive; all skill levels are welcome.  Areas of focus include comraderie, individual skill development, learning the rules of tennis, and fun!`
          } 
        ],
      },
      who: 'Participants ages 12 and up',
      organizations: [
        "Excellence Tennis Foundation",
        "Five Seasons Family Sports Club",
        "Greater Cincinnati Adapted Sports Club"
      ],
      when: 'Practices go year-round on Wednesday nights from 8:00 to 9:30.',
      where: [
        {
          src: 'https://goo.gl/maps/b2ZywdCn3aWFX4Jn6',
          address: 'Five Seasons Family Sports Club, 11790 Snider Rd, Cincinnati, OH 45249'
        }
      ],
      contact:[
        {
          name: 'Tony Fanning',
          phone: '(513)509-3350',
          tel: '5135093350'
        }
      ],
      links: [
        "[Excellence Tennis Foundation](https://www.excellencetennisfoundation.org/)",
        "[Five Seasons Family Sports Club](https://home.fiveseasonssportsclub.com/)"
      ]
    }
  ]