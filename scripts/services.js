// Define your cards data
const cardsData = [
  {
    title: "Customer Experience and Customer Engagement",
    description:
      "We combine technology and Human-Centered Design (HCD) to deeply understand your customers, addressing their pain points and transforming user experiences into opportunities for greater engagement and improved results.",
  },
  {
    title: "Customer Journey Mapping",
    description:
      "Understanding and optimizing the entire customer interaction process across all touchpoints, ensuring a seamless and consistent experience.",
  },
  {
    title: "Customer Feedback and Insights",
    description:
      "Gathering and analyzing customer feedback to continuously improve services and address pain points effectively.",
  },
  {
    title: "Omnichannel Support",
    description:
      "Providing consistent, integrated customer service across all communication channels (online, offline, mobile), ensuring a smooth experience no matter where customers engage.",
  },
  {
    title: "Personalization and Customer Engagement",
    description:
      "Tailoring interactions, communications, and offers based on customer data and preferences to enhance engagement and satisfaction",
  },
];

// Function to create a single card
function createCard(cardData, i) {
  return `
    <div class="card-item pt-8 p-6 bg-[#050721] rounded-[20px] [clip-path:polygon(90%_0,100%_20%,100%_100%,0_100%,0_0)]">
      <h3 class="text-lg font-opti leading-normal font-medium text-white mb-8 ">${i + 1}-${cardData.title}</h3>
      <p class="text-white/80">${cardData.description}</p>
    </div>
  `;
}

// Function to generate all cards including duplicates for smooth scrolling
function generateCards() {
  const scrollContent = document.getElementById("scrollContent");

  // Generate original set of cards
  let cardsHTML = cardsData.map((card, i) => createCard(card, i)).join("");

  // Duplicate the cards for smooth infinite scroll
  cardsHTML = cardsHTML + `<div class="lg:contents hidden">${cardsHTML}</div>`;

  scrollContent.innerHTML = cardsHTML;

  // Check if we need more duplicates to fill the space
  setTimeout(() => {
    const containerHeight =
      document.querySelector(".scroll-container").offsetHeight;
    const contentHeight = scrollContent.offsetHeight / 2; // Divide by 2 because we already duplicated once

    if (contentHeight < containerHeight * 2) {
      // Add more duplicates if needed
      scrollContent.innerHTML = cardsHTML + cardsHTML;
    }
  }, 100);
}

// Initialize the cards
document.addEventListener("DOMContentLoaded", generateCards);
