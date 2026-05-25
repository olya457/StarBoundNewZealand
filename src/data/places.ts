import {images} from '../assets/images';
import {categoryColors} from '../theme';
import type {CategoryId, Place} from '../types';

export const categories: Array<{
  id: CategoryId;
  label: string;
  shortLabel: string;
  color: string;
}> = [
  {
    id: 'dark',
    label: 'Dark Sky Points',
    shortLabel: 'Dark Sky',
    color: categoryColors.dark,
  },
  {
    id: 'mountain',
    label: 'Mountain Glow',
    shortLabel: 'Mountains',
    color: categoryColors.mountain,
  },
  {
    id: 'lake',
    label: 'Lake Reflections',
    shortLabel: 'Lakes',
    color: categoryColors.lake,
  },
  {
    id: 'coast',
    label: 'Coastal Lights',
    shortLabel: 'Coastal',
    color: categoryColors.coast,
  },
];

export const places: Place[] = [
  {
    id: 'aoraki-mackenzie-dark-sky',
    name: 'Aoraki Mackenzie Dark Sky Reserve',
    categoryId: 'dark',
    categoryLabel: 'Dark Sky Points',
    shortDescription:
      "One of New Zealand's most iconic dark-sky regions, surrounded by mountains, glacial lakes, and wide open night horizons.",
    longDescription:
      'Aoraki Mackenzie Dark Sky Reserve is a vast protected night-sky area in the central South Island, known for clear atmosphere, low light pollution, and dramatic alpine surroundings. It includes Lake Tekapo, Lake Pukaki, Twizel, and Aoraki / Mount Cook, making it ideal for travelers who want stars, silence, and open space. At night the reserve feels cinematic: dark mountain outlines, bright constellations, and a sky that becomes the main attraction.',
    address:
      'Mackenzie District, Canterbury, South Island, New Zealand. Representative access point: Aoraki / Mount Cook National Park Visitor Centre, 1 Larch Grove, Aoraki / Mount Cook 7999, New Zealand.',
    coordinates: {latitude: -43.7333, longitude: 170.1},
    image: images.darkAorakiMackenzie,
    bestTime: 'June-August',
    travelTip:
      'Arrive before sunset near Lake Tekapo or Aoraki / Mount Cook and let your eyes adjust before moving between viewpoints.',
    safetyNote:
      'Roads can ice over in winter. Drive slowly, keep warm layers nearby, and stay on marked public access points.',
  },
  {
    id: 'mount-john-observatory',
    name: 'Mount John Observatory',
    categoryId: 'dark',
    categoryLabel: 'Dark Sky Points',
    shortDescription:
      'A mountaintop observatory above Lake Tekapo, offering one of the clearest night-sky viewpoints in the Mackenzie Basin.',
    longDescription:
      "Mount John Observatory sits high above Lake Tekapo and is one of the strongest visual anchors for the region's dark-sky identity. The elevation creates distance from everyday light and noise, while the lake and mountain views give the night a powerful foreground. It combines science, scenery, and atmosphere in one recognizable place.",
    address: '422 Godley Peaks Road, Lake Tekapo 7999, New Zealand.',
    coordinates: {latitude: -43.9867, longitude: 170.465},
    image: images.darkMountJohn,
    bestTime: 'Clear winter nights',
    travelTip:
      'Book guided access when available and keep extra time for the road up and down the hill.',
    safetyNote:
      'Respect observatory access rules and avoid bright lights that affect night vision and research work.',
  },
  {
    id: 'lake-tekapo-night-viewpoint',
    name: 'Lake Tekapo Night Viewpoint',
    categoryId: 'dark',
    categoryLabel: 'Dark Sky Points',
    shortDescription:
      'A calm lakeside viewpoint where the night sky, water, and mountain backdrop create a strong star-reflection mood.',
    longDescription:
      'Lake Tekapo is one of the most visually memorable places in the Mackenzie region after sunset. Open lake views, dark-sky conditions, and the Southern Alps in the distance make it ideal for quiet travel discovery and night photography. Near the Church of the Good Shepherd, the lake, sky, silence, and cinematic atmosphere become the main experience.',
    address: 'Pioneer Drive, Lake Tekapo, Mackenzie District, New Zealand.',
    coordinates: {latitude: -44.0047, longitude: 170.483},
    image: images.darkLakeTekapoNight,
    bestTime: 'Late evening',
    travelTip:
      'Use the lakeside area as a slow stop rather than a quick photo point.',
    safetyNote:
      'Keep away from dark water edges and stay on established lakefront paths.',
  },
  {
    id: 'twizel-dark-sky-fields',
    name: 'Twizel Dark Sky Fields',
    categoryId: 'dark',
    categoryLabel: 'Dark Sky Points',
    shortDescription:
      'Open Mackenzie Basin landscapes near Twizel, ideal for wide night skies and quiet stargazing stops.',
    longDescription:
      'Twizel works well as a practical base for dark-sky viewpoints. The surrounding fields, low settlement density, and broad mountain-framed horizons create a strong sense of space after dark. This place is less about one landmark and more about stepping outside the town edge and watching the night sky open above the basin.',
    address: 'Twizel, Mackenzie District, Canterbury 7901, New Zealand.',
    coordinates: {latitude: -44.2599, longitude: 170.1043},
    image: images.darkTwizelFields,
    bestTime: 'New moon weeks',
    travelTip:
      'Choose public roadside viewpoints with clear parking and a wide view toward the basin.',
    safetyNote:
      'Avoid stopping on narrow rural roads and keep headlights pointed away from other viewers.',
  },
  {
    id: 'naseby-dark-sky-community',
    name: 'Naseby Dark Sky Community',
    categoryId: 'dark',
    categoryLabel: 'Dark Sky Points',
    shortDescription:
      'A historic Central Otago town recognized for its dark skies, remote atmosphere, and community-led night-sky protection.',
    longDescription:
      "Naseby brings a quieter and more intimate tone to dark-sky travel. Set in Central Otago's Maniatoto region, it combines historic gold-mining character with clear southern skies. The town is known for preserving the night environment, making it a strong option for travelers looking beyond the most obvious routes.",
    address: 'Naseby, Central Otago, Otago, New Zealand.',
    coordinates: {latitude: -45.0282, longitude: 170.145},
    image: images.darkNaseby,
    bestTime: 'Cold clear nights',
    travelTip:
      'Walk the town edge slowly and look for open public areas with minimal street lighting.',
    safetyNote:
      'Carry warm clothing even in shoulder seasons because inland nights can drop quickly.',
  },
  {
    id: 'aoraki-mount-cook-viewpoint',
    name: 'Aoraki / Mount Cook Viewpoint',
    categoryId: 'mountain',
    categoryLabel: 'Mountain Glow',
    shortDescription:
      "A powerful alpine viewpoint with dramatic views of New Zealand's highest mountain and surrounding glacier valleys.",
    longDescription:
      'Aoraki / Mount Cook Viewpoint is one of the strongest mountain locations for a cinematic New Zealand route. Sharp alpine peaks, glacier valleys, cold open air, and wide sky views become especially dramatic near sunset. The Hooker Valley area gives accessible close views of the mountain and makes the landscape feel like it leads directly into the Southern Alps.',
    address:
      'Aoraki / Mount Cook National Park Visitor Centre, 1 Larch Grove, Aoraki / Mount Cook 7999, New Zealand.',
    coordinates: {latitude: -43.7381, longitude: 170.0998},
    image: images.mountainAorakiViewpoint,
    bestTime: 'Golden hour',
    travelTip:
      'Reach the visitor centre area before sunset and keep the route simple after dark.',
    safetyNote:
      'Weather shifts quickly in alpine terrain. Check conditions and turn back early when visibility drops.',
  },
  {
    id: 'roys-peak-lookout',
    name: 'Roys Peak Lookout',
    categoryId: 'mountain',
    categoryLabel: 'Mountain Glow',
    shortDescription:
      'A famous alpine lookout above Wanaka with sweeping views over Lake Wanaka, Mount Aspiring, and surrounding peaks.',
    longDescription:
      "Roys Peak Lookout is one of New Zealand's most recognizable mountain viewpoints. The route climbs through open alpine terrain and rewards travelers with wide views over Lake Wanaka, ridgelines, and Mount Aspiring. It fits the Mountain Glow mood because sunrise and sunset create soft edges, glowing lake surfaces, and long mountain shadows.",
    address:
      'Roys Peak Track Car Park, Mount Aspiring Road, Wanaka 9305, New Zealand.',
    coordinates: {latitude: -44.689, longitude: 169.0517},
    image: images.mountainRoysPeak,
    bestTime: 'Sunrise',
    travelTip:
      'Treat the track as a serious day hike and plan the descent before darkness.',
    safetyNote:
      'The route is steep and exposed. Carry water, layers, and a headlamp if starting early.',
  },
  {
    id: 'lindis-pass-summit-viewpoint',
    name: 'Lindis Pass Summit Viewpoint',
    categoryId: 'mountain',
    categoryLabel: 'Mountain Glow',
    shortDescription:
      'A high mountain pass viewpoint with golden tussock hills, open ridgelines, and a strong road-trip atmosphere.',
    longDescription:
      'Lindis Pass Summit Viewpoint is a quiet but powerful mountain stop between Central Otago and the Mackenzie Basin. The landscape is minimal and cinematic: golden tussock, bare slopes, long road curves, and a wide sky. The hills catch light beautifully, especially during golden hour.',
    address: 'Lindis Pass Summit Lookout, State Highway 8, Otago, New Zealand.',
    coordinates: {latitude: -44.5868, longitude: 169.6413},
    image: images.mountainLindisPass,
    bestTime: 'Late afternoon',
    travelTip:
      'Use it as a short road-trip pause when the low sun gives the pass more shape.',
    safetyNote:
      'Pull fully into safe parking areas and watch for changing road conditions in winter.',
  },
  {
    id: 'the-remarkables-lookout',
    name: 'The Remarkables Lookout',
    categoryId: 'mountain',
    categoryLabel: 'Mountain Glow',
    shortDescription:
      'A Queenstown viewpoint facing the sharp mountain wall of The Remarkables above Lake Wakatipu.',
    longDescription:
      "The Remarkables Lookout gives travelers a clean view of one of Queenstown's most iconic mountain ranges. The peaks rise sharply above Lake Wakatipu, creating a bold alpine backdrop without needing to travel deep into wilderness. Around sunset the range becomes a dark serrated silhouette above the lake.",
    address:
      'Remarkables Lookout Seat, 1 Brunswick Street, Queenstown 9300, New Zealand.',
    coordinates: {latitude: -45.0307, longitude: 168.6618},
    image: images.mountainRemarkables,
    bestTime: 'Sunset',
    travelTip:
      'Pair it with an evening walk near Queenstown Bay for lake and mountain contrast.',
    safetyNote:
      'Stay on public paths and avoid road-edge photos around traffic.',
  },
  {
    id: 'mount-aspiring-national-park-viewpoint',
    name: 'Mount Aspiring National Park Viewpoint',
    categoryId: 'mountain',
    categoryLabel: 'Mountain Glow',
    shortDescription:
      'A dramatic alpine viewpoint near the Rob Roy Glacier route, surrounded by cliffs, waterfalls, glaciers, and mountain valleys.',
    longDescription:
      'Mount Aspiring National Park Viewpoint gives the category a wilder alpine feeling. Around the Rob Roy Track, glacier views, steep rock walls, waterfalls, and deep valley atmosphere create a stronger adventure mood. It feels less like a photo stop and more like an entry into serious mountain country.',
    address:
      'Raspberry Creek Car Park, Wanaka-Mount Aspiring Road, Mount Aspiring National Park, Otago, New Zealand.',
    coordinates: {latitude: -44.4897, longitude: 168.7356},
    image: images.mountainAspiring,
    bestTime: 'Stable summer days',
    travelTip:
      'Start early and treat the road to Raspberry Creek as part of the adventure.',
    safetyNote:
      'Check river, road, and weather conditions before committing to the valley route.',
  },
  {
    id: 'lake-tekapo',
    name: 'Lake Tekapo',
    categoryId: 'lake',
    categoryLabel: 'Lake Reflections',
    shortDescription:
      "A turquoise alpine lake known for calm reflections, open skies, and one of New Zealand's strongest night-travel atmospheres.",
    longDescription:
      "Lake Tekapo is one of the South Island's most recognizable lake landscapes. During the day it is bright, turquoise, and open. At night the surrounding peaks become dark silhouettes and the sky feels wider above the water. It combines water, stars, mountains, and calm space in one simple scene.",
    address: 'Pioneer Drive, Lake Tekapo, Canterbury 7999, New Zealand.',
    coordinates: {latitude: -44.0047, longitude: 170.4771},
    image: images.lakeTekapo,
    bestTime: 'Sunset to late night',
    travelTip:
      'Stay near accessible lakefront points and wait for wind to settle when chasing reflections.',
    safetyNote: 'Do not walk close to dark shore edges when visibility is low.',
  },
  {
    id: 'lake-pukaki',
    name: 'Lake Pukaki',
    categoryId: 'lake',
    categoryLabel: 'Lake Reflections',
    shortDescription:
      'A wide glacial lake with bright blue water, open horizons, and dramatic views toward Aoraki / Mount Cook.',
    longDescription:
      'Lake Pukaki is powerful because of scale. It stretches across the Mackenzie Basin with pale blue glacial water and a direct view toward Aoraki / Mount Cook on clear days. Around sunset the shoreline becomes a quiet viewing point and the mountains fade into the distance.',
    address:
      'Lake Pukaki Visitor Centre, State Highway 8, Pukaki, Canterbury 7999, New Zealand.',
    coordinates: {latitude: -44.1822, longitude: 170.1556},
    image: images.lakePukaki,
    bestTime: 'Clear evenings',
    travelTip:
      'Use the southern viewpoint for an easy panoramic stop before continuing toward Mount Cook.',
    safetyNote:
      'Wind can be strong around the open lake. Keep distance from exposed edges.',
  },
  {
    id: 'lake-wanaka',
    name: 'Lake Wanaka',
    categoryId: 'lake',
    categoryLabel: 'Lake Reflections',
    shortDescription:
      'A large Otago lake surrounded by mountains, known for peaceful shoreline views and soft evening reflections.',
    longDescription:
      'Lake Wanaka combines a relaxed town atmosphere with a strong alpine setting. The lake is wide, deep, and open, with mountain ridges around the water and long shoreline walks. It offers a softer version of dramatic scenery: evening light on water, distant peaks, and a calm lakeside mood.',
    address: 'Wanaka Lakefront, Ardmore Street, Wanaka 9305, New Zealand.',
    coordinates: {latitude: -44.5, longitude: 169.133},
    image: images.lakeWanaka,
    bestTime: 'Evening walks',
    travelTip:
      'Start from the town lakefront and let the route stay easy and walkable.',
    safetyNote:
      'Use lit public paths after dark and watch for cyclists on shared tracks.',
  },
  {
    id: 'lake-wakatipu',
    name: 'Lake Wakatipu',
    categoryId: 'lake',
    categoryLabel: 'Lake Reflections',
    shortDescription:
      'A long glacial lake beside Queenstown, framed by mountains and known for dramatic water-and-peak scenery.',
    longDescription:
      "Lake Wakatipu is one of New Zealand's most dramatic lake settings. Its long narrow shape bends through the mountains, creating changing views from Queenstown, Glenorchy, Kingston, and nearby roads. Evening views from Queenstown Bay connect lake, lights, mountains, and sky in one readable travel scene.",
    address:
      'Queenstown Bay Beach, Marine Parade, Queenstown 9300, New Zealand.',
    coordinates: {latitude: -45.05, longitude: 168.5},
    image: images.lakeWakatipu,
    bestTime: 'Blue hour',
    travelTip:
      'Use Queenstown Bay for an easy night stop with water, lights, and mountains in frame.',
    safetyNote:
      'Stay clear of the lake edge when crowds and low light make footing harder to read.',
  },
  {
    id: 'lake-matheson',
    name: 'Lake Matheson',
    categoryId: 'lake',
    categoryLabel: 'Lake Reflections',
    shortDescription:
      'A small forest-framed lake famous for mirror-like reflections of Aoraki / Mount Cook and Mount Tasman.',
    longDescription:
      'Lake Matheson is one of the strongest reflection locations in New Zealand. Native forest surrounds the lake near Fox Glacier, and calm dark water can mirror Aoraki / Mount Cook and Mount Tasman. It brings a quieter West Coast mood to the route: forest edges, dawn light, and a hidden mirror feeling.',
    address:
      'Lake Matheson Walk, Lake Matheson Road, Fox Glacier 7886, West Coast, New Zealand.',
    coordinates: {latitude: -43.4484, longitude: 169.9698},
    image: images.lakeMatheson,
    bestTime: 'Calm dawn',
    travelTip:
      'Choose early still conditions when the lake has the best chance to hold reflections.',
    safetyNote:
      'Use the marked loop track and carry a light if starting before sunrise.',
  },
  {
    id: 'cape-reinga-lighthouse',
    name: 'Cape Reinga Lighthouse',
    categoryId: 'coast',
    categoryLabel: 'Coastal Lights',
    shortDescription:
      'A remote northern lighthouse where two seas meet under wide open sky and dramatic coastal light.',
    longDescription:
      'Cape Reinga Lighthouse stands at the far north of the North Island where the Tasman Sea and Pacific Ocean meet. The lighthouse, ocean horizon, cliffs, and open sky make it feel like the natural endpoint of a journey. At sunset, the white tower becomes a quiet marker against the dark coastline.',
    address: 'Cape Reinga Road, Cape Reinga, Northland 0484, New Zealand.',
    coordinates: {latitude: -34.4333, longitude: 172.6833},
    image: images.coastCapeReinga,
    bestTime: 'Sunset',
    travelTip:
      'Let the visit breathe. The sense of distance is the strongest part of the location.',
    safetyNote:
      'Stay on marked paths and plan the long road back before night gets too deep.',
  },
  {
    id: 'nugget-point-lighthouse',
    name: 'Nugget Point Lighthouse',
    categoryId: 'coast',
    categoryLabel: 'Coastal Lights',
    shortDescription:
      'A dramatic Otago lighthouse overlooking rocky islets, ocean cliffs, and a bright coastal horizon.',
    longDescription:
      'Nugget Point Lighthouse is one of the strongest coastal visuals in the South Island. It sits above the Catlins coast looking toward rocky islets known as The Nuggets. A narrow coastal path, white lighthouse, dark cliffs, and rocks fading into the sea create a clean cinematic route.',
    address: 'The Nuggets Road, Ahuriri Flat, Otago 9271, New Zealand.',
    coordinates: {latitude: -46.45, longitude: 169.8167},
    image: images.coastNuggetPoint,
    bestTime: 'Early morning or dusk',
    travelTip:
      'Walk slowly from the car park and use the viewing platform as the main stop.',
    safetyNote:
      'Wind and cliff edges need respect. Stay behind barriers and avoid wet rocks.',
  },
  {
    id: 'castlepoint-lighthouse',
    name: 'Castlepoint Lighthouse',
    categoryId: 'coast',
    categoryLabel: 'Coastal Lights',
    shortDescription:
      'A striking Wairarapa lighthouse above beach, cliffs, and open ocean views.',
    longDescription:
      'Castlepoint Lighthouse gives the category a classic seaside-travel feeling. Beach, lagoon, cliff paths, and wide sea views make the route compact but complete: arrive at the coast, walk toward the lighthouse, look back across the beach, then follow the light toward the horizon.',
    address:
      'Castlepoint Scenic Reserve, Jetty Road, Castlepoint 5889, Wairarapa, New Zealand.',
    coordinates: {latitude: -40.9, longitude: 176.2333},
    image: images.coastCastlepoint,
    bestTime: 'Late afternoon',
    travelTip:
      'Combine the lighthouse path with a beach pause while there is still enough light.',
    safetyNote:
      'Check wind and tide conditions and avoid exposed cliff sections in bad weather.',
  },
  {
    id: 'cape-egmont-lighthouse',
    name: 'Cape Egmont Lighthouse',
    categoryId: 'coast',
    categoryLabel: 'Coastal Lights',
    shortDescription:
      'A quiet Taranaki lighthouse with ocean views and the powerful silhouette of Mount Taranaki nearby.',
    longDescription:
      'Cape Egmont Lighthouse has a flatter, quieter atmosphere with the sea on one side and Mount Taranaki shaping the wider landscape. The white tower against the coastal plain creates a clean visual icon and a strong sense of western North Island coastline.',
    address: '377-379 Cape Road, Pungarehu 4685, Taranaki, New Zealand.',
    coordinates: {latitude: -39.2833, longitude: 173.75},
    image: images.coastCapeEgmont,
    bestTime: 'Clear evening',
    travelTip:
      'Look for the relationship between lighthouse, coast, and mountain rather than only the tower.',
    safetyNote:
      'Use public access areas and avoid wandering onto private land around the lighthouse.',
  },
  {
    id: 'kaikoura-coastline',
    name: 'Kaikoura Coastline',
    categoryId: 'coast',
    categoryLabel: 'Coastal Lights',
    shortDescription:
      'A scenic coastal route where ocean cliffs, wildlife, and mountain views meet in one dramatic landscape.',
    longDescription:
      'Kaikoura Coastline is a broader coastal route rather than a single lighthouse. Ocean views, rocky platforms, marine wildlife, and nearby mountains make the landscape layered and cinematic. The Peninsula Walkway and Point Kean area give accessible scenery and strong route potential.',
    address:
      'Kaikoura Peninsula Walkway, Kaikoura 7300, Canterbury, New Zealand.',
    coordinates: {latitude: -42.423, longitude: 173.7},
    image: images.coastKaikoura,
    bestTime: 'Early evening',
    travelTip:
      'Use Point Kean as a practical pin and build a short coastal walk around it.',
    safetyNote:
      'Keep distance from wildlife, avoid wet platforms, and follow posted coastal warnings.',
  },
];

export const placeById = Object.fromEntries(
  places.map(place => [place.id, place]),
) as Record<string, Place>;
