const projects = {
  "lost-pet": {
    kicker: "AI PRODUCT CONCEPT",
    title: "Lost Pet Recovery",
    problem: "When a pet goes missing, the owner is suddenly faced with many possible actions while already stressed and unsure what matters most.",
    approach: "Explore whether AI can turn the situation into a personalized, prioritized recovery plan instead of a generic checklist.",
    built: "Turned pet details into an actionable search plan and shareable updates.",
    next: "Develop the recovery-plan experience and test what information is truly needed to rank the owner's next actions."
  },
  "shopper-signal": {
    kicker: "AI PRODUCT CONCEPT",
    title: "BrickDRAFT",
    problem: "I know what I want to build, but I don't know how to build it with the pieces I have.",
    approach: "Design around what users want to build with the bricks they already own.",
    built: "An AI concept that turns an idea into a buildable model with personalized instructions.",
    next: "Test build accuracy, brick matching, and substitutions."
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
