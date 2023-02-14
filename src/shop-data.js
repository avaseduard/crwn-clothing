const SHOP_DATA = [
  {
    title: 'toys',
    items: [
      {
        id: 1,
        name: 'Ace Pro Refined',
        imageUrl: 'https://i.ibb.co/0M4YrWQ/Ace-Pro-Refined.jpg',
        price: 686,
        description:
          'The Hubsan ACE PRO R is a foldable drone with a 3-axis gimbal and obstacle sensing. It has a 1/1.3" 4K 200Mbps camera and a flight time of up to 37 minutes. The drone has a block buster mode and comes ready to fly (RTF). It is available in black.',
      },
      {
        id: 2,
        name: 'Zino Mini Pro',
        imageUrl: 'https://i.ibb.co/b15GJf8/Zino-Mini-Pro.jpg',
        price: 549,
        description:
          'The Hubsan Zino Mini Pro is the next step up in advanced, remote control flight. With a foldable design and a weight of just 249 grams, you can take the Zino Mini Pro with you wherever you go. Whether you want to take it on a hike in the mountains or just enjoy flying your drone around your local neighborhood, the Zino Mini Pro is designed to be portable and functional at all times, regardless of the environment, temperature, or weather.',
      },
      {
        id: 3,
        name: 'X4 Desire Pro',
        imageUrl: 'https://i.ibb.co/pdvc2f0/X4-Desire-Pro.jpg',
        price: 149,
        description:
          'Experience the thrill of flying with the H216A X4 Desire Pro FPV Drone from Hubsan. By utilizing the X-Hubsan app for iOS and Android mobile devices, you can connect your device to the drone via Wi-Fi for an immersive FPV experience. The built-in Full HD 1080p camera wirelessly streams what it sees to your display in real time. The X4 Desire Pro can be manually controlled, or you can implement autonomous flight modes, taking the pressure off so you can sit back and enjoy the ride. Regardless of how you fly the Desire Pro, you can take photos and video along the way to document your experience and share it with others online.',
      },
      {
        id: 4,
        name: 'Jet',
        imageUrl: 'https://i.ibb.co/Z11B08z/Jet.jpg',
        price: 399,
        description:
          'Hubsan has jumped on the micro brushless FPV train and has put out an interesting quad with their new H123D X4 Jet. It looks a lot like the H122D X4 Jet but has one BIG upgrade, brushless motors. The H123D Jet is an all-in-one ready to fly package so you can get it up in the air without having to mess with binding or Betaflight.',
      },
      {
        id: 5,
        name: 'Ace SE',
        imageUrl: 'https://i.ibb.co/hFC6fSL/Ace-SE.jpg',
        price: 429,
        description:
          'The Hubsan Ace SE is a powerful drone that provides all the features you need to take your hobby to the next level. With a max speed of 16 m/s, max range of 10 km and max flight time of 35 minutes, this drone is perfect for long-distance flights. The 3800 mAh battery capacity means you can fly your drone for longer periods of time without having to stop and recharge. The Orbit Mode allows you to circle an object while shooting video from different angles, the Follow Mode lets you follow an object while filming it, and the Waypoint Mode helps you plan out how your drone will fly with pre-programmed settings. If you are looking for a drone that has it all, then look no further than the Hubsan Ace SE.',
      },
      {
        id: 6,
        name: 'FPV Plus',
        imageUrl: 'https://i.ibb.co/TKrrsGP/FPV-Plus.jpg',
        price: 219,
        description:
          'The Hubsan H107D+ is Hubsans latest FPV capable mini quadcopter. Like its brother the H107C+ it also features an altitude hold function for smoother flying, making capturing good quality video and photo’s even easier with the 720P HD camera direct to the handset.',
      },
      {
        id: 7,
        name: 'Desire Pro',
        imageUrl: 'https://i.ibb.co/0KBzF3t/Desire-Pro.jpg',
        price: 95,
        description:
          'Experience the thrill of flying with the H216A X4 Desire Pro FPV Drone from Hubsan. By utilizing the X-Hubsan app for iOS and Android mobile devices, you can connect your device to the drone via Wi-Fi for an immersive FPV experience. The built-in Full HD 1080p camera wirelessly streams what it sees to your display in real time. The X4 Desire Pro can be manually controlled, or you can implement autonomous flight modes, taking the pressure off so you can sit back and enjoy the ride. Regardless of how you fly the Desire Pro, you can take photos and video along the way to document your experience and share it with others online.',
      },
      {
        id: 8,
        name: 'X4 Cam Plus',
        imageUrl: 'https://i.ibb.co/MgHQwBT/X4-Cam-Plus.jpg',
        price: 49,
        description:
          'X4 Cam Plus developed version of the H107C, this new H107C+ features a clear and delicious design. Just like the big brother of the H107D+, this X4 Cam Plus features new blue and red LEDs arranged on the front and rear engines to easily see the direction of the drone. It has a 720P HD camera that allows you to capture and save your flights to watch them on a computer with friends. It has an altitude mode so you can expand without getting up and down, which is also practical for beautiful videos.',
      },
      {
        id: 9,
        name: 'Nano Q4 cam',
        imageUrl: 'https://i.ibb.co/djGL7wX/Nano-Q4-cam.jpg',
        price: 29,
        description:
          'The Hubsan H111C Q4 Nano Plus with HD camera is part of Hubsan’s new generation of nano-quadcopters, super small, manoeuvrable and now with a HD camera for capturing photos and video footage.',
      },
    ],
  },
  {
    title: 'mini',
    items: [
      {
        id: 10,
        name: 'Mini 3 Pro',
        imageUrl: 'https://i.ibb.co/7VKPg7x/Mini-3-Pro.png',
        price: 759,
        description:
          'The mini-sized, mega-capable DJI Mini 3 Pro is just as powerful as it is portable. Weighing less than 249 g and with upgraded safety features, it is not only regulation-friendly, it is also the safest in its series. [1] With a 1/1.3-inch sensor and top-tier features, it redefines what it means to fly Mini.',
      },
      {
        id: 11,
        name: 'Air 2S',
        imageUrl: 'https://i.ibb.co/c33VnyH/Air-2S.png',
        price: 975,
        description:
          'The compact and foldable design of the DJI Air 2S Fly More Combo Drone lets you easily capture breathtaking aerial images and video whenever the mood strikes. It is an ideal alternative for use when travelling on vacation or for photography enthusiasts looking to record from new and unique perspectives. Piloting is made to be easy and intuitive via your smartphone and the DJI Fly app. Simply slip your phone into the included remote controller. Thanks to the Air 2S 3-axis gimbal, four remote antennae, and OcuSync 3.0 technology, you can receive a stable, live view from the drone up to 7.5 miles away.',
      },
      {
        id: 12,
        name: 'Mavic 3 Classic',
        imageUrl: 'https://i.ibb.co/PN99c31/Mavic-3-Classic.png',
        price: 1599,
        description:
          'Professional quality aerial imaging and video is now more affordable with the DJI Mavic 3 Classic with DJI RC Remote. Nearly identical to the standard Mavic 3, the Classic version focuses on the advanced 20MP 4/3" CMOS sensor designed by legendary camera maker Hasselblad. Designed specifically for the Mavic 3 and meeting Hasselblad rigorous hardware and software standards, the 3-axis gimbal camera is capable of 4K video at 60 fps, a maximum of 5.1K at 50 fps, and 4K slow-motion footage at 120 fps.',
      },
      {
        id: 13,
        name: 'Mavic 3 Cine Premium',
        imageUrl: 'https://i.ibb.co/b1K6hnb/Mavic-3.jpg',
        price: 4999,
        description:
          'Geared towards professional content creation, the Mavic 3 Cine Premium Combo from DJI adds the ability to use the Apple ProRes 422 HQ codec, and it bumps the internal storage from 8GB to a monster 1TB SSD. Outside of that, the Cine Premium sports the same impressive dual cameras in the drone 3-axis gimbal. One is a 20MP wide-angle camera with 4/3" CMOS and 4x digital zoom from legendary camera maker Hasselblad. The other is a 12MP telephoto with 1/2" CMOS, 4K video, 7x optical, and up to 28x digital zoom. You can utilize this in Explore Mode to scout locations, but primarily in conjunction with the wide-angle Hasselblad, transitioning between the two for truly dynamic, cinematic results.',
      },
      {
        id: 14,
        name: 'Mavic Pro',
        imageUrl: 'https://i.ibb.co/HgN3Q5j/Mavic-Air.jpg',
        price: 999,
        description:
          'The Mavic from DJI packs features you once thought possible only on much larger platforms into a compact quadcopter that is snappy, agile, and captures high-resolution images. The drone features an advanced flight control system that draws on a host of sensors — including a ground-facing camera, ultrasound, GPS, dual redundant IMUs, and more — to keep track of where it is flying in 3D space and even avoid collisions. The Mavic works in tandem with DJI GO mobile app for accessing settings, getting a telemetry readout, viewing a low-latency video feed, and even editing and sharing your footage. In addition to traditional joystick style controls, you can fly with simple tap-based commands, and the Mavic can even recognize gestures for the perfect selfie.',
      },
      {
        id: 15,
        name: 'Mavic Air',
        imageUrl: 'https://i.ibb.co/HgN3Q5j/Mavic-Air.jpg',
        price: 919,
        description:
          'Capture all your adventures in stunning detail with the Mavic Air Fly More Combo from DJI. This foldable, pocket-portable drone was designed with travelers and outdoor enthusiasts in mind. It features a 3-axis gimbal-stabilized camera with a 1.2/3" CMOS sensor that shoots 12MP stills and is capable of capturing 4K video at 30 fps that it can transfer at speeds up to 100 Mb/s or store on its 8GB of internal storage.',
      },
      {
        id: 16,
        name: 'Spark',
        imageUrl: 'https://i.ibb.co/wg2RsPx/Spark.png',
        price: 819,
        description:
          'Though agile in the air, drones can be bulky and cumbersome when on land. Not so with the alpine white Spark from DJI, which will not hold you back no matter what the adventure. This compact quadcopter features an integrated camera with motorized stabilization to capture 12MP photos, 1080p Full HD videos, and even aerial selfies. The drone compact size, 31 mph top speed, and up to 16 minutes of flight time will appeal to a variety of users, from FPV enthusiasts to racers to those just looking for more dynamic shots than are possible with simply a smartphone or camcorder. The drone features GPS- and vision-based navigation for outdoor or indoor use, a variety of flight modes, and a 3D obstacle-detection system.',
      },
      {
        id: 17,
        name: 'Mini 2',
        imageUrl: 'https://i.ibb.co/B2xZWDY/Mini-2.png',
        price: 449,
        description:
          'Fly farther to capture stunning 4K aerial videos with the Mini 2 Fly More Combo from DJI. Utilizing DJI OcuSync 2.0 2.4/5.8 GHz wireless transmission technology, the Mini 2 can be operated from up to 6.2 miles away while still providing you with video of what the drone sees. The Mini 2 can also be flown as high as 2.5 miles and withstand 19 to 24 mph winds, all while maintaining a compact, foldable design that weighs only 8.8 oz. It is small and light enough to take with you almost anywhere.',
      },
    ],
  },
  {
    title: 'advanced',
    items: [
      {
        id: 18,
        name: 'Avata',
        imageUrl: 'https://i.ibb.co/5cWCrBW/Avata.png',
        price: 629,
        description:
          'Safely film steady, ultra-wide 4K stabilized video indoors or outside, in and around objects, with the DJI Avata FPV Drone. Sporting what some call a "cinewhoop" design, the Avata comes in a palm-sized form factor with all four propellers protected with attached guards. This allows for close-up filming indoors, near people, and through small openings without risking damage or injury to people and property. If the Avata does come in contact, it can just bounce off and keep flying. For a more immersive experience with intuitive controls, you can opts to pair the Avata with optional Goggles 2, FPV Goggles V2, and the DJI Motion Controller.',
      },
      {
        id: 19,
        name: 'FPV',
        imageUrl: 'https://i.ibb.co/wwZctV4/FPV.png',
        price: 1299,
        description:
          'Fully immerse yourself in the amazing aerial views and unbridled speed of drone flying with the combo version of the DJI FPV Drone. Using the bundled FPV Goggles V2, you get a first-person view of what the drone sees, with footage that makes it feel like you are the one flying through the sky. The onboard 4K60 fps gimbal camera can send low-latency video to your goggles for a near real-time experience. The 150° super-wide FOV lets you take in and appreciate the scope of the vistas you fly over.',
      },
      {
        id: 20,
        name: 'Evo Lite',
        imageUrl: 'https://i.ibb.co/BqkjDy9/Evo-Lite.jpg',
        price: 1199,
        description:
          'Go beyond UHD 4K and open up a new moonlit world with the orange, premium EVO Lite+ Drone from Autel Robotics. The Lite+ 3-axis gimbal houses a 1" CMOS sensor that uses Autels intelligent moonlight algorithm. This opens up the ability for nighttime aerial filming, where you can record crisp, detailed footage with low noise, even at a high ISO. Video is recorded at up to 6K30 with 20MP still image capabilities, along with an adjustable f/2.8 to f/11 aperture to alter exposure and depth of field for truly professional-quality results.',
      },
      {
        id: 21,
        name: 'Evo Nano',
        imageUrl: 'https://i.ibb.co/x8g5YMZ/Evo-Nano.jpg',
        price: 999,
        description:
          'With a foldable design and weighing in at only 8.8 oz, the standard version of the orange EVO Nano+ Drone is a go-anywhere, fit-anywhere solution that lets you easily take to the skies to capture pro-quality aerial images and video. The Nano+ does this through a 1/1.28" CMOS sensor inside a 3-axis gimbal for images up to 50MP and videos up to 4K30p Ultra HD quality. Thanks to a dual PDAF+CDAF autofocusing system, large aperture, and RYYB color filter array, the camera can more easily keep fast-moving objects in focus and deliver low-light content with minimal noise.',
      },
      {
        id: 22,
        name: 'Evo Pro',
        imageUrl: 'https://i.ibb.co/G2c28Xm/Evo-Pro.jpg',
        price: 1999,
        description:
          'For professionals that need more control, the EVO II PRO 6K Drone from Autel offers you a gimbal camera with a variable aperture of f/2.8 to f/11, giving you wide-ranging adjustment over how much light gets into the 6K 1" sensor. The camera delivers ISO ranges up to 6400 for video and up to 12,800 for photos. As for resolution, the 6K gimbal can achieve up to 5472 x 3076 in video and up to 5472 x 3648 stills.',
      },
    ],
  },
  {
    title: 'cinema',
    items: [
      {
        id: 23,
        name: 'Inspire 2',
        imageUrl: 'https://i.ibb.co/0JN5ZgS/Inspire-2.jpg',
        price: 5299,
        description:
          'With the Inspire 2 Standard Kit with Zenmuse X5S Gimbal & MFT 15mm/1.7 ASPH Lens from DJI, you get a complete aerial imaging solution right out of the box. Included with the Inspire 2 is the Zenmuse X5S gimbal camera with a 15mm Micro Four Thirds lens. This provides you with the capability of capturing footage at up to 5.2K resolution at 30 fps in CinemaDNG and Apple ProRes. It is also capable of recording up to 4K video at a smooth 60 fps. Images can be captured at up to 21MP, even in 20 fps DNG burst shooting mode, which helps ensure you always get the perfect shot. As you fly the magnesium-aluminum-clad Inspire 2, all the recording functionality is processed by its CineCore 2.0 image-processing engine.',
      },
      {
        id: 24,
        name: 'Inspire 1 Pro',
        imageUrl: 'https://i.ibb.co/BzpChvj/Inspire-1-Pro.jpg',
        price: 1899,
        description:
          'A Micro Four Thirds CMOS sensor with 4K image capture is introduced to DJIs quadcopter line with the Inspire 1 v2.0 PRO featuring the Zenmuse X5 camera and gimbal system along with a 15mm f/1.7 lens. Forgoing the fixed landing gear design found on many earlier quadcopters, the Inspire 1 features a retractable arm system whereby the underside of each prop motor has a foot to act as a landing pod when the arms are lowered. In-flight, the arms lift up to provide the camera an unobstructed 360-degree view. A 3-axis gimbal keeps shots steady and the camera pointed the same direction as the quadcopter banks and turns. The camera records internally to microSDHC/SDXC memory cards and can also beam a live 720p feed to a mobile device running the DJI GO app or a monitor or FPV glasses with an HDMI input. One transmitter (radio controller) is included and a second can be added so that one operator can pilot and another can pan and tilt the camera.',
      },
      {
        id: 25,
        name: 'Airpeak S1',
        imageUrl: 'https://i.ibb.co/w0bNV0v/Airpeak-S1.jpg',
        price: 8999,
        description:
          'For Sony Alpha owners looking to take the leap into aerial filmmaking, the lightweight Sony Airpeak S1 Professional Drone is an ideal choice, as it allows you to utilize your existing Alpha camera and library of lenses, and it keeps you within the Sony digital ecosystem. Simply add a compatible S1 gimbal (not included), and you are ready to fly. Powerful motors deliver impressive speed and wind resistance, while a comprehensive vision sensing system and convenient return-to-home feature help ensure that the Airpeak S1 will capture stunning professional-quality content, flight after flight.',
      },
      {
        id: 26,
        name: 'Evolve 2',
        imageUrl: 'https://i.ibb.co/pvvpS2F/Evolve-2.jpg',
        price: 3699,
        description:
          'Designed expressly for aerial cinematographers, the XDynamics EVOLVE 2 Professional Drone is packed with technology to capture stunning, cinema-grade footage for all aspects of film, television, and online streaming. The EVOLVE 2 uses the Astra Mirrorless Micro Four Thirds camera system, featuring a Sony 12MP sensor and the ability to capture video up to 4K at 120 fps. Large pixels support low-light filming with little noise, and you can use any compatible lens to further enhance your content, such as the included Olympus 17mm prime. The impressive camera is elevated by a strong and lightweight carbon fiber airframe with a powerful and intricately engineered motor and propeller system. It can all be piloted and fully controlled by a dual touchscreen remote control.',
      },
      {
        id: 27,
        name: 'Matrice 300 RTK',
        imageUrl: 'https://i.ibb.co/z2NY1Yt/Matrice-300-RTK.png',
        price: 9999,
        description:
          'Enjoy peace of mind when flying important missions with this Matrice 300 Commercial Quadcopter with RTK & Enterprise Shield Plus Kit from B&H. This kit includes a DJI Matrice 300 RTK commercial quadcopter and an Enterprise Shield Plus protection plan. Even with 6 directional obstacle avoidance and an integrated health system, the Matrice 300 RTK is a ruggedly constructed drone meant for dangerous locations, such as firefighting, law enforcement, industrial inspections, and more. Situations that can potentially damage the drone.',
      },
      {
        id: 28,
        name: 'Aerigon',
        imageUrl: 'https://i.ibb.co/VBFzsSz/Aerigon.png',
        price: 249999,
        description:
          'AERIGON was designed for strength with a lightweight body of prepreg carbon-fiber consisting of a 6 arm helicopter and a stabilized camera gimbal standing on 3 feet. Each helicopter arm has 2 counter-rotating rotors with a proprietary power distribution system providing the power and precision to fly professional camera configurations with pro zoom lenses and full FIZ (Focus, Iris and Zoom) control.',
      },
      {
        id: 29,
        name: 'Typhoon H',
        imageUrl: 'https://i.ibb.co/Yyyy9f5/Typhoon-H.jpg',
        price: 899,
        description:
          'Sacrifice nothing with the Typhoon H Plus Hexacopter from Yuneec. The Typhoon H Plus represents the best of both worlds in a UAV with its stability and image quality. The Typhoon H Plus features a 3-axis gimbal-mounted camera with a C23 1" sensor capable of capturing 20MP still photos and Ultra HD 4K video at 60 fps. The 3-axis gimbal is capable of continuous rotation for 360-degree image capture.',
      },
    ],
  },
  {
    title: 'enterprise',
    items: [
      {
        id: 30,
        name: 'Mavic 3 Enterprise',
        imageUrl: 'https://i.ibb.co/nsr9fQS/Mavic-3-Enterprise.png',
        price: 3819,
        description:
          'Designed to support enterprise-level missions and projects, the DJI Mavic 3 Enterprise with 1-Year DJI Care Enterprise Plus is an ideal solution for industrial, corporate, and first responder applications. The drone is extremely compact and lightweight, it can be quickly unfolded and deployed at a moments notice, and it is capable of up to 45 minutes of flight time. The Mavic 3 Enterprise features dual wide-angle and telephoto lenses in its 3-axis gimbal camera. The 20MP wide lens is ideal for taking expansive shots and rapid surveying, and the 12MP tele lens lets you get up close to your subject with a 56x hybrid zoom. These abilities are enhanced by long-range O3 transmission, omnidirectional obstacle avoidance, and more.',
      },
      {
        id: 31,
        name: 'Matrice 30',
        imageUrl: 'https://i.ibb.co/YZ6S2cc/Matrice-30.png',
        price: 13999,
        description:
          'Designed for commercial flights in harsh conditions, the Matrice 30 Enterprise Drone Plus Combo from DJI can withstand water, dirt, dust, wind, and extreme temperatures from -4 up to 122°F. Combine that with built-in redundancies and backup systems for flight control and signal transmission, and the Matrice 30 is a drone you can count on for important projects. Whether you push the 52-mph max speed of the Matrice 30 for fast-paced action or elevate up to 4.4 miles for majestic b-roll, the twin wide-angle and zoom camera system will capture it all at 4K30 resolution.',
      },
      {
        id: 32,
        name: 'Agras T-30',
        imageUrl: 'https://i.ibb.co/KmTg7VM/Agras-T-30.png',
        price: 22490,
        description:
          'DJI Agras T30 sprayer drone has a 30 liters (7.9 US gallons) tank capacity. With the new plunger pump system and the larger capacity, this drone can spray up to 40 acres in one hour of flight time (30 to 35 acres per when considering the battery replacement and refilling the tank).',
      },
      {
        id: 33,
        name: 'Mavic 2 Enterprise',
        imageUrl: 'https://i.ibb.co/Wvmh22V/Mavic-2-Enterprise.png',
        price: 6499,
        description:
          'Utilizing the practical benefits of drone technology, the versatile DJI Mavic 2 Enterprise Advanced Drone is equipped with technology to help first responders enforce the law, find and rescue victims, or fight fires. It can also inspect power equipment, structures, and even the environment, in minutes compared to hours or days. The Mavic 2 Enterprise Advanced can do all of this thanks to its compact size, long-lasting battery, ability to fly missions quickly, high-tech dual thermal and visual cameras, and a host of other features.',
      },
      {
        id: 34,
        name: 'Phantom 4 RTK',
        imageUrl: 'https://i.ibb.co/wWChw0P/Phantom-4-RTK.jpg',
        price: 6499,
        description:
          'This Phantom 4 RTK Quadcopter with D-RTK 2 Mobile Station, Tripod & Shield Plus Kit from B&H includes a DJI Phantom 4 RTK drone, a D-RTK 2 GNSS Mobile Station, a mobile station tripod, and the Enterprise Shield Plus Protection Plan. This Phantom 4 RTK drone is capable of providing your business with centimeter-level mapping accuracy. The kit also provides the peace of mind in knowing your investment is protected. The Shield Plus plan gives you unlimited repairs based on the total plan coverage you select from DJI. The plan lasts for one year and offers a backup device during repairs, so you are never down for long.',
      },
      {
        id: 35,
        name: 'Matrice 600 Pro',
        imageUrl: 'https://i.ibb.co/SdWcXCn/Matrice-600-Pro.jpg',
        price: 10949,
        description:
          'Supporting a total takeoff weight of 34 pounds, the Matrice 600 Pro (M600 Pro) is a hexacopter from DJI designed for professional video and industrial imaging applications. Updated from the original Matrice 600, it features improved flight performance and a higher loading capacity. Preinstalled arms and antennas reduce the time required for setup, and the systems modular design makes it easy to mount additional modules.',
      },
    ],
  },
]

export default SHOP_DATA
