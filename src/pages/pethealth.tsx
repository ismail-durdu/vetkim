import { GoSearch } from "react-icons/go";
import SmallBlog from "../components/smallblog";
import { FaArrowDown } from "react-icons/fa6";
import Footer from "../components/footer";
import pet1 from "../assets/blog1.png";
import pet2 from "../assets/blog2.png"; 
import pet3 from "../assets/blog3.png"; 

function PetHealth() {
  return (
    <div>
      <div className="text-center ">
        <h3 className="inline-block mt-8 bg-purple-200 py-1 px-4 text-purple-700 rounded-3xl">
          Pet Blog 🐾
        </h3>
        <h1 className="my-5 text-3xl lg:text-5xl text-[#4B5563]">
          Resources and insights
        </h1>
        <h3 className="text-lg lg:text-xl text-[#4B5563] mb-5 ">
          The latest news and interviews.
        </h3>
      </div>
       <div className="flex justify-center mt-4">
        <div className="flex flex-row items-center gap-2 border border-gray-300 rounded-2xl px-4 py-2 w-[300px] bg-white">
          <span className="text-[#4B5563] font-medium">Search</span>
          <input
          type="text"
          className="outline-none flex-1 text-gray-800"
          />
          </div>
          </div>



      <div className="px-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 lg:px-20 py-10">
        <SmallBlog
          id="1"
          image={pet1}
          category="Puppy Care"
          title="New Kitten Checklist"
          description="Everything your new feline friend will need—from litter box to food."
          fullTextFirstPart="Bringing home a new kitten is an exciting experience, but it also comes with responsibilities. Before your kitten arrives, make sure you have all the essential supplies: a litter box, kitten-safe litter, high-quality food and water bowls, and a cozy bed. Don’t forget toys and a scratching post to keep them entertained and active. Schedule your first vet visit within the first few days. This ensures your kitten is healthy and up to date on vaccinations. Ask your veterinarian about flea prevention, deworming, and microchipping options. Establish a feeding routine with age-appropriate food and always keep clean water available. Create a calm, quiet space where your kitten can rest and gradually adjust to their new environment."
          fullTextSecondPart="Lastly, be patient. Kittens are naturally curious and full of energy, and they need time to explore, bond, and learn about their new surroundings. It's normal for them to feel timid or overwhelmed at first, so allow them to adjust at their own pace. Spend quality time playing and interacting with your kitten daily to help build trust and strengthen your connection. Use soft tones when speaking, and reward positive behavior with gentle praise or treats."
        />
        <SmallBlog
          id="2"
          image={pet2}
          category="Puppy Care"
          title="Your Yorkie’s First Vet Visit"
          description="Yorkies are small but mighty! The first vet visit can be overwhelming, but with the right prep, it doesn’t have to be.."
          fullTextFirstPart="Yorkies are small but mighty! The first vet visit can be overwhelming, but with the right prep, it doesn’t have to be. Make sure to bring your Yorkie's medical history, including any vaccinations or treatments they have received. This will help the vet understand your dog's health background and provide the best care possible. Prepare your Yorkie for the visit by getting them used to being handled and examined. Practice touching their ears, paws, and mouth gently to help them feel more comfortable during the vet visit."
          fullTextSecondPart="During the visit, the vet will perform a thorough examination, including checking your Yorkie's weight, heart rate, and overall health. They may also recommend vaccinations, flea and tick prevention, and spaying or neutering if not already done. Don't hesitate to ask questions about your Yorkie's diet, exercise needs, and any concerns you may have. Building a good relationship with your vet is essential for your Yorkie's long-term health."
        />
        <SmallBlog
          id="3"
          image={pet3}
          category="Bathing"
          title="How Often Should I Bathe My Dog?"
          description="More than you think? Less than you think? It depends on breed, lifestyle, and skin health.."
          fullTextFirstPart="In general, bathing your dog every 4–6 weeks works well for most breeds. However, dogs with allergies or sensitive skin may require vet-recommended routines. Over-bathing can strip away natural oils and lead to dry, itchy skin, so finding the right balance is essential. Brushing between baths can help reduce shedding and keep your dog cleaner for longer. Additionally, the frequency of baths can depend on factors such as coat type, activity level, and environment. For example, dogs that spend a lot of time outdoors or love swimming may need more frequent baths, while short-haired indoor dogs may go longer without one. Using a gentle, dog-specific shampoo is crucial to avoid skin irritation and maintain a healthy coat. Always make sure to dry your dog thoroughly after a bath to prevent any dampness that can lead to fungal or bacterial "
          fullTextSecondPart="infections, especially in breeds with skin folds. And most importantly, turn bath time into a positive experience by using treats and praise—it builds trust and makes grooming easier in the long run. Make bath time enjoyable with warm water, gentle handling, and rewards afterward. If your dog is anxious, start slow and keep initial baths brief. Over time, your dog will learn to tolerate—and maybe even enjoy—the experience. Consistent grooming supports not only their hygiene but also strengthens the bond between you and your furry friend.
"
       
       />
      </div>

      <div className="flex justify-center bg-purple-200 text-purple-500 w-35 mx-auto py-2 mb-7 rounded-lg">
        <div className="flex flex-row gap-2 items-center">
          <FaArrowDown />
          Load More
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default PetHealth;
