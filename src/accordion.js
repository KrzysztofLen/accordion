class Accordion {
	constructor(accordionBtn) {
		this.accordionBtn = accordionBtn;
		this.last = -1;

		this.init();
	}

	toggle(el, accordion) {
		const actual = accordion.indexOf(el);
		const panel = el.nextElementSibling;

		if(this.last >= 0) {
			const lastEl = accordion[this.last];
			this.closeAccordion(lastEl);
		}

		if(this.last !== actual) {
			this.openAccordion(el, panel);
			this.last = actual;
			return;
		}

		this.last = -1;
	}

	closeAccordion(el) {
		el.classList.remove('active');
	}

	openAccordion(el, panel) {
		el.classList.add('active');
		panel.style.maxHeight = panel.scrollHeight + 'px';
	}

	init() {
		this.accordionBtn.forEach(el => el.addEventListener('click', (e) => this.toggle(el, this.accordionBtn)));
	}
}

export {Accordion};