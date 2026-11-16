const projects = {
  "lost-pet": {
    kicker: "AI PRODUCT CONCEPT",
    title: "Lost Pet Recovery",
    problem: "When a pet goes missing, the owner is suddenly faced with many possible actions while already stressed and unsure what matters most.",
    approach: "Explore whether AI can turn the situation into a personalized, prioritized recovery plan instead of a generic checklist.",
    built: "Initial product strategy plus printable 8.5 × 11 flyers and 11 × 17 posters designed around fast, clear communication.",
    next: "Develop the recovery-plan experience and test what information is truly needed to rank the owner's next actions."
  },
  "shopper-signal": {
    kicker: "AI + CUSTOMER INSIGHTS",
    title: "ShopperSignal",
    problem: "Customer feedback is valuable, but it can be scattered, repetitive, and difficult to turn into clear product decisions.",
    approach: "Explore how AI can organize feedback into understandable signals while keeping the customer's actual problem at the center.",
    built: "Product strategy, MVP thinking, sample data, customer journeys, and early technical artifacts.",
    next: "Turn the concept into a focused prototype that demonstrates one high-value feedback-to-insight workflow."
  }
};

const dialog = document.querySelector('#project-dialog');
const content = document.querySelector('#dialog-content');

document.querySelectorAll('.project-trigger').forEach(button => {
  button.addEventListener('click', () => {
    const p = projects[button.dataset.project];
    content.innerHTML = `
      <p class="dialog-kicker">${p.kicker}</p>
      <h2>${p.title}</h2>
      <div class="dialog-section"><h4>The problem</h4><p>${p.problem}</p></div>
      <div class="dialog-section"><h4>My approach</h4><p>${p.approach}</p></div>
      <div class="dialog-section"><h4>What I built</h4><p>${p.built}</p></div>
      <div class="dialog-section"><h4>What's next</h4><p>${p.next}</p></div>`;
    dialog.showModal();
  });
});

document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
document.querySelector('#year').textContent = new Date().getFullYear();
