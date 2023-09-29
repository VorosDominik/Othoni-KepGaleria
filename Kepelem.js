export class Kepelem {
    constructor(kepek, articleElement) {
        this.kepek = kepek;
        this.articleElement = articleElement
      this.modal = $('<div class="modal">'); // Modal létrehozása jQuery-vel
      this.modalContent = $('<div class="modal-content">');
      this.modalCloseButton = $('<span class="close-button">&times;</span>'); // Modal bezárás gomb
      this.modalImage = $('<img class="modal-image">'); // A modalban megjelenő kép
  
      // Modal tartalmának összeállítása
      this.modalContent.append(this.modalCloseButton, this.modalImage);
      this.modal.append(this.modalContent);
  
      // Modal bezárásának eseménykezelője
      this.modalCloseButton.click(() => {
        this.closeModal();
      });
  
      // Képek eseménykezelője
      this.setupImageClickHandlers();
    }
  
    // Képekhez kattintás eseménykezelő hozzáadása
    setupImageClickHandlers() {
      this.kepek.forEach((kep) => {
        const imgElement = $('<img class="kep">')
          .attr('src', kep.kep)
          .attr('alt', kep.leiras);
  
        // Kattintás eseménykezelője a képeknek
        imgElement.click(() => {
          this.openModal(kep);
        });
  
        // Képek hozzáadása a dokumentumhoz
        $('body').append(imgElement);
      });
    }
  
    // Modal megnyitása
    openModal(kep) {
      this.modalImage.attr('src', kep.kep);
      this.modalContent.show();
      this.modal.show();
    }
  
    // Modal bezárása
    closeModal() {
      this.modalContent.hide();
      this.modal.hide();
    }
    setupImageClickHandlers() {
        this.kepek.forEach((kep) => {
          const imgElement = $('<img class="kep">')
            .attr('src', kep.kep)
            .attr('alt', kep.leiras);
    
          // Kattintás eseménykezelője a képeknek
          imgElement.click(() => {
            this.openModal(kep);
          });
    
          // Képek hozzáadása az article elemhez
          this.articleElement.append(imgElement);
        });
      }
  }
  