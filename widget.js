
(function() {
  const integrationsData = {"categories":[{"title":"Phone systems","blurb":"Keep your number. The agent answers on the line you already have.","platforms":[{"name":"Twilio","icon":"twilio","hex":"F22F46"},{"name":"RingCentral","domain":"ringcentral.com"},{"name":"Telnyx","domain":"telnyx.com"},{"name":"Vonage","domain":"vonage.com"},{"name":"Zoom Phone","domain":"zoom.us"},{"name":"Microsoft Teams Phone","domain":"teams.microsoft.com"},{"name":"Dialpad","domain":"dialpad.com"},{"name":"Aircall","icon":"aircall","hex":"00B388"},{"name":"Nextiva","domain":"nextiva.com"},{"name":"8x8","domain":"8x8.com"},{"name":"OpenPhone","domain":"openphone.com"},{"name":"Grasshopper","domain":"grasshopper.com"},{"name":"Ooma","domain":"ooma.com"},{"name":"Google Voice","domain":"voice.google.com"},{"name":"Asterisk / FreePBX","icon":"asterisk","hex":"F68F1E"}]},{"title":"Calendars & booking","blurb":"Checks real availability and books the slot while the caller is on the line.","platforms":[{"name":"Google Calendar","icon":"googlecalendar","hex":"4285F4"},{"name":"Outlook","domain":"outlook.com"},{"name":"Microsoft Bookings","domain":"bookings.microsoft.com"},{"name":"Calendly","icon":"calendly","hex":"006BFF"},{"name":"Cal.com","domain":"cal.com"},{"name":"Acuity Scheduling","domain":"acuityscheduling.com"},{"name":"Square Appointments","icon":"square","hex":"FFFFFF"},{"name":"Setmore","domain":"setmore.com"},{"name":"SimplyBook.me","domain":"simplybook.me"},{"name":"Zoho Bookings","domain":"zoho.com"}]},{"title":"CRMs","blurb":"New leads, notes, and call outcomes land where your team already works.","platforms":[{"name":"GoHighLevel","domain":"gohighlevel.com"},{"name":"HubSpot","icon":"hubspot","hex":"FF7A59"},{"name":"Salesforce","icon":"salesforce","hex":"00A1E0"},{"name":"Pipedrive","domain":"pipedrive.com"},{"name":"Zoho CRM","domain":"zoho.com"},{"name":"Close","domain":"close.com"},{"name":"Keap","domain":"keap.com"},{"name":"ActiveCampaign","domain":"activecampaign.com"},{"name":"monday.com","domain":"monday.com"},{"name":"Airtable","icon":"airtable","hex":"18BFFF"},{"name":"Google Sheets","icon":"googlesheets","hex":"34A853"},{"name":"Notion","icon":"notion","hex":"FFFFFF"}]},{"title":"Messaging & handoff","blurb":"Texts the caller, alerts your team, and routes urgent calls to a human.","platforms":[{"name":"SMS","icon":"twilio","hex":"F22F46"},{"name":"WhatsApp","icon":"whatsapp","hex":"25D366"},{"name":"Slack","icon":"slack","hex":"E01E5A"},{"name":"Microsoft Teams","domain":"teams.microsoft.com"},{"name":"Gmail","icon":"gmail","hex":"EA4335"},{"name":"Outlook Mail","domain":"outlook.com"},{"name":"Podium","domain":"podium.com"},{"name":"Weave","domain":"getweave.com"},{"name":"Intercom","icon":"intercom","hex":"6AFDEF"},{"name":"Zendesk","icon":"zendesk","hex":"FFFFFF"},{"name":"Freshdesk","domain":"freshdesk.com"},{"name":"Front","domain":"front.com"}]},{"title":"Payments & accounting","blurb":"Take deposits, send payment links, and look up invoices on the call.","platforms":[{"name":"Stripe","icon":"stripe","hex":"635BFF"},{"name":"Square","icon":"square","hex":"FFFFFF"},{"name":"PayPal","icon":"paypal","hex":"0070E0"},{"name":"Authorize.net","domain":"authorize.net"},{"name":"Shopify","icon":"shopify","hex":"7AB55C"},{"name":"QuickBooks","icon":"quickbooks","hex":"2CA01C"},{"name":"Xero","domain":"xero.com"}]},{"title":"Automation & data","blurb":"Custom workflows and backends when off the shelf isn't enough.","platforms":[{"name":"Zapier","domain":"zapier.com"},{"name":"Make","icon":"make","hex":"A259FF"},{"name":"n8n","icon":"n8n","hex":"EA4B71"},{"name":"REST APIs & webhooks","domain":"postman.com"},{"name":"Supabase","icon":"supabase","hex":"3FCF8E"},{"name":"PostgreSQL","icon":"postgresql","hex":"6B8FE8"},{"name":"Firebase","icon":"firebase","hex":"FFA000"},{"name":"Google Drive","icon":"googledrive","hex":"4285F4"},{"name":"SharePoint","domain":"sharepoint.com"}]}],"industries":[{"title":"Home services","platforms":[{"name":"ServiceTitan","domain":"servicetitan.com"},{"name":"Jobber","domain":"getjobber.com"},{"name":"Housecall Pro","domain":"housecallpro.com"},{"name":"FieldEdge","domain":"fieldedge.com"},{"name":"Service Fusion","domain":"servicefusion.com"},{"name":"Workiz","domain":"workiz.com"},{"name":"Successware","domain":"successware.com"},{"name":"ServiceM8","domain":"servicem8.com"},{"name":"Kickserv","domain":"kickserv.com"}]},{"title":"Roofing & construction","platforms":[{"name":"AccuLynx","domain":"acculynx.com"},{"name":"JobNimbus","domain":"jobnimbus.com"},{"name":"Roofr","domain":"roofr.com"},{"name":"Buildertrend","domain":"buildertrend.com"},{"name":"JobTread","domain":"jobtread.com"},{"name":"CompanyCam","domain":"companycam.com"}]},{"title":"Medical & clinics","platforms":[{"name":"athenahealth","domain":"athenahealth.com"},{"name":"eClinicalWorks","domain":"eclinicalworks.com"},{"name":"Tebra","domain":"tebra.com"},{"name":"DrChrono","domain":"drchrono.com"},{"name":"Elation Health","domain":"elationhealth.com"},{"name":"AdvancedMD","domain":"advancedmd.com"},{"name":"NextGen","domain":"nextgen.com"},{"name":"ModMed","domain":"modmed.com"},{"name":"Healthie","domain":"gethealthie.com"},{"name":"Spruce Health","domain":"sprucehealth.com"},{"name":"Hint Health","domain":"hint.com"}]},{"title":"Dental","platforms":[{"name":"Dentrix","domain":"dentrix.com"},{"name":"Eaglesoft","domain":"pattersondental.com"},{"name":"Open Dental","domain":"opendental.com"},{"name":"Curve Dental","domain":"curvedental.com"},{"name":"NexHealth","domain":"nexhealth.com"}]},{"title":"Therapy & wellness","platforms":[{"name":"SimplePractice","domain":"simplepractice.com"},{"name":"Jane App","domain":"jane.app"},{"name":"TherapyNotes","domain":"therapynotes.com"},{"name":"Practice Better","domain":"practicebetter.io"},{"name":"IntakeQ","domain":"intakeq.com"}]},{"title":"Salons, med spas & fitness","platforms":[{"name":"Salon Sync","domain":"salon-sync.co"},{"name":"Meevo","domain":"meevo.com"},{"name":"Zenoti","domain":"zenoti.com"},{"name":"Boulevard","domain":"joinblvd.com"},{"name":"Mangomint","domain":"mangomint.com"},{"name":"Mindbody","domain":"mindbodyonline.com"},{"name":"Vagaro","domain":"vagaro.com"},{"name":"Phorest","domain":"phorest.com"},{"name":"GlossGenius","domain":"glossgenius.com"},{"name":"Fresha","domain":"fresha.com"}]},{"title":"Legal","platforms":[{"name":"Clio","domain":"clio.com"},{"name":"MyCase","domain":"mycase.com"},{"name":"Filevine","domain":"filevine.com"},{"name":"PracticePanther","domain":"practicepanther.com"},{"name":"Smokeball","domain":"smokeball.com"},{"name":"Lawmatics","domain":"lawmatics.com"},{"name":"CASEpeer","domain":"casepeer.com"},{"name":"Litify","domain":"litify.com"}]},{"title":"Real estate & property","platforms":[{"name":"Follow Up Boss","domain":"followupboss.com"},{"name":"Lofty","domain":"lofty.com"},{"name":"Sierra Interactive","domain":"sierrainteractive.com"},{"name":"AppFolio","domain":"appfolio.com"},{"name":"Buildium","domain":"buildium.com"},{"name":"Yardi","domain":"yardi.com"},{"name":"Rent Manager","domain":"rentmanager.com"},{"name":"Guesty","domain":"guesty.com"},{"name":"Hostaway","domain":"hostaway.com"}]},{"title":"Auto, truck & fleet","platforms":[{"name":"Tekmetric","domain":"tekmetric.com"},{"name":"Shopmonkey","domain":"shopmonkey.io"},{"name":"Shop-Ware","domain":"shop-ware.com"},{"name":"Fullbay","domain":"fullbay.com"},{"name":"Mitchell 1","domain":"mitchell1.com"},{"name":"CDK Global","domain":"cdkglobal.com"},{"name":"VinSolutions","domain":"vinsolutions.com"},{"name":"DealerSocket","domain":"dealersocket.com"}]},{"title":"Restaurants & hospitality","platforms":[{"name":"Toast","domain":"toasttab.com"},{"name":"OpenTable","domain":"opentable.com"},{"name":"Resy","domain":"resy.com"},{"name":"SevenRooms","domain":"sevenrooms.com"},{"name":"Tock","domain":"exploretock.com"},{"name":"Cloudbeds","domain":"cloudbeds.com"}]},{"title":"Insurance","platforms":[{"name":"Applied Epic","domain":"appliedsystems.com"},{"name":"EZLynx","domain":"ezlynx.com"},{"name":"HawkSoft","domain":"hawksoft.com"},{"name":"AgencyZoom","domain":"agencyzoom.com"},{"name":"QQCatalyst","domain":"qqcatalyst.com"}]},{"title":"Veterinary","platforms":[{"name":"ezyVet","domain":"ezyvet.com"},{"name":"Cornerstone","domain":"idexx.com"},{"name":"Vetspire","domain":"vetspire.com"},{"name":"Shepherd","domain":"shepherd.vet"},{"name":"AVImark","domain":"covetrus.com"}]},{"title":"Self storage","platforms":[{"name":"SiteLink","domain":"sitelink.com"},{"name":"storEDGE","domain":"storedge.com"},{"name":"Easy Storage Solutions","domain":"easystoragesolutions.com"}]}]};

  const calls = [
    { id: "lovejoy", logo: "images/lovejoyclinic.com.png", client: "LoveJoy Hormone Clinic", kind: "Inbound · After hours patient intake", src: "lovejoy-demo.mp3", agent: "Ellie" },
    { id: "roofing", logo: "images/247roofingsolutions.com.png", client: "24/7 Restoration & Roofing", kind: "Inbound · Roofing receptionist", src: "roofing-demo.mp3", agent: "Receptionist" },
    { id: "merx", logo: "images/merx.png", client: "Merx Truck & Trailer", kind: "Inbound · After hours receptionist", src: "merx-demo.mp3", agent: "Chet" },
    { id: "funeral", logo: "images/funeralbuddy.png", client: "Funeral Buddy", kind: "Outbound · Sales appointment setter", src: "funeral-demo.mp3", agent: "Sales agent" },
    { id: "tutor", logo: "images/tutorabc.com.png", client: "TutorABC Brazil", kind: "Inbound · Course enrollment", src: "tutor-demo.mp3", agent: "Camila" }
  ];

  let transcripts = {};

  function formatTime(s) {
    if (!s || isNaN(s)) return "0:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return m + ":" + (sec < 10 ? "0" : "") + sec;
  }

  function initPlayer() {
    let audio = document.querySelector('audio[src*="-demo.mp3"]') || document.querySelector('audio');
    if (!audio) {
      audio = document.createElement('audio');
      document.body.appendChild(audio);
    }

    const headerP = Array.from(document.querySelectorAll('p')).find(p => p.textContent.trim() === 'Real client calls');
    if (!headerP) return;
    const widgetCard = headerP.closest('.rounded-\\[28px\\]') || headerP.closest('.border') || headerP.parentElement.parentElement;
    if (!widgetCard) return;

    const kindEl = widgetCard.querySelector('p.uppercase.tracking-\\[0\\.18em\\]') || widgetCard.querySelector('p.uppercase');
    const logoImg = widgetCard.querySelector('img.h-10.w-10');
    const titleH3 = widgetCard.querySelector('h3.text-2xl');
    const canvas = widgetCard.querySelector('canvas');
    const playBtn = widgetCard.querySelector('button[aria-label="Play call"]') || widgetCard.querySelector('button.bg-teal-300');
    const scrubberContainer = widgetCard.querySelector('.cursor-pointer.rounded-full');
    const progressFill = scrubberContainer ? scrubberContainer.querySelector('div') : null;
    const timeSpans = widgetCard.querySelectorAll('.tabular-nums span');
    const curTimeSpan = timeSpans[0];
    const durTimeSpan = timeSpans[1];
    
    const moreCallsList = widgetCard.querySelector('.h-\\[118px\\]');
    const callButtons = moreCallsList ? Array.from(moreCallsList.querySelectorAll('button')) : [];
    const transcriptContainer = widgetCard.querySelector('.overflow-y-auto.px-5') || widgetCard.querySelector('.h-\\[340px\\]') || widgetCard.querySelector('.sm\\:h-\\[420px\\]');

    let currentIndex = 0;
    let isPlaying = false;
    let hasStarted = false;
    let audioCtx = null;
    let analyser = null;

    function setupAudioContext() {
      if (audioCtx) return;
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        audioCtx = new AudioCtx();
        const src = audioCtx.createMediaElementSource(audio);
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = 0.78;
        src.connect(analyser);
        analyser.connect(audioCtx.destination);
      } catch (e) {}
    }

    function renderTranscript() {
      if (!transcriptContainer) return;
      const currentCall = calls[currentIndex];
      const list = transcripts[currentCall.id] || [];
      const curTime = audio.currentTime || 0;

      const visibleItems = hasStarted 
        ? list.filter(item => item.t <= curTime + 0.15)
        : list.slice(0, 2);

      let html = '<div class="h-12"></div>';

      visibleItems.forEach((item, idx) => {
        const isAI = item.s === 'a';
        const isLatest = hasStarted && idx === visibleItems.length - 1 && isPlaying;

        if (isAI) {
          html += `
            <div class="mb-5 flex gap-3" style="opacity: 1; transform: none;">
              <span class="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold bg-teal-300/15 text-teal-200">AI</span>
              <div class="max-w-[85%]">
                <p class="mb-1 text-[11px] uppercase tracking-[0.14em] text-white/30">${currentCall.agent} · AI agent</p>
                <p class="inline-block rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed transition-colors bg-teal-300/[0.08] text-white/90 ${isLatest ? 'ring-1 ring-teal-300/40' : ''}">${item.x}</p>
              </div>
            </div>`;
        } else {
          html += `
            <div class="mb-5 flex gap-3 flex-row-reverse text-right" style="opacity: 1; transform: none;">
              <span class="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full text-[10px] font-semibold bg-white/10 text-white/60">C</span>
              <div class="max-w-[85%]">
                <p class="mb-1 text-[11px] uppercase tracking-[0.14em] text-white/30">Caller</p>
                <p class="inline-block rounded-2xl px-4 py-2.5 text-[15px] leading-relaxed transition-colors bg-white/[0.05] text-white/75 ${isLatest ? 'ring-1 ring-teal-300/40' : ''}">${item.x}</p>
              </div>
            </div>`;
        }
      });

      if (!hasStarted) {
        html += '<p class="mt-2 text-center text-sm text-white/40">Press play to hear the full call</p>';
      }

      transcriptContainer.innerHTML = html;
      transcriptContainer.scrollTo({ top: transcriptContainer.scrollHeight, behavior: 'smooth' });
    }

    function selectCall(idx, autoPlay) {
      if (idx === currentIndex && isPlaying) {
        audio.pause();
        return;
      }

      currentIndex = idx;
      const c = calls[idx];

      if (kindEl) kindEl.textContent = c.kind;
      if (logoImg) logoImg.src = c.logo;
      if (titleH3) titleH3.textContent = c.client;

      callButtons.forEach((btn, i) => {
        if (i === idx) {
          btn.className = "flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm transition bg-white/[0.07] text-white";
        } else {
          btn.className = "flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm transition text-white/50 hover:bg-white/[0.04] hover:text-white/80";
        }
      });

      audio.src = c.src;
      audio.currentTime = 0;
      hasStarted = false;
      renderTranscript();
      updatePlayButtonUI(false);
      if (progressFill) progressFill.style.width = '0%';
      if (curTimeSpan) curTimeSpan.textContent = '0:00';

      if (autoPlay) {
        setupAudioContext();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();
        hasStarted = true;
        audio.play().then(() => updatePlayButtonUI(true)).catch(() => {});
      }
    }

    function updatePlayButtonUI(playing) {
      isPlaying = playing;
      if (!playBtn) return;
      playBtn.setAttribute('aria-label', playing ? 'Pause call' : 'Play call');

      if (playing) {
        playBtn.innerHTML = `
          <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1.2"></rect>
            <rect x="14" y="5" width="4" height="14" rx="1.2"></rect>
          </svg>`;
      } else {
        playBtn.innerHTML = `
          ${!hasStarted ? '<span class="absolute inset-0 rounded-full animate-[pulse-dot_1.8s_ease-out_infinite]"></span>' : ''}
          <svg viewBox="0 0 24 24" class="ml-0.5 h-5 w-5" fill="currentColor">
            <path d="M8 5.5v13a1 1 0 0 0 1.5.86l11-6.5a1 1 0 0 0 0-1.72l-11-6.5A1 1 0 0 0 8 5.5Z"></path>
          </svg>`;
      }
    }

    if (playBtn) {
      playBtn.addEventListener('click', function(e) {
        e.preventDefault();
        setupAudioContext();
        if (audioCtx && audioCtx.state === 'suspended') audioCtx.resume();

        if (audio.paused) {
          hasStarted = true;
          audio.play().then(() => {
            updatePlayButtonUI(true);
            renderTranscript();
          }).catch(err => {
            console.error('Play error:', err);
          });
        } else {
          audio.pause();
          updatePlayButtonUI(false);
        }
      });
    }

    if (scrubberContainer) {
      scrubberContainer.addEventListener('click', function(e) {
        if (!audio.duration) return;
        const rect = scrubberContainer.getBoundingClientRect();
        const pos = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        audio.currentTime = pos * audio.duration;
        hasStarted = true;
        renderTranscript();
      });
    }

    callButtons.forEach((btn, idx) => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        selectCall(idx, true);
      });
    });

    audio.addEventListener('play', () => updatePlayButtonUI(true));
    audio.addEventListener('pause', () => updatePlayButtonUI(false));
    audio.addEventListener('ended', () => {
      updatePlayButtonUI(false);
      if (progressFill) progressFill.style.width = '0%';
    });

    audio.addEventListener('timeupdate', () => {
      if (audio.duration) {
        const pct = (audio.currentTime / audio.duration) * 100;
        if (progressFill) progressFill.style.width = pct + '%';
        if (curTimeSpan) curTimeSpan.textContent = formatTime(audio.currentTime);
      }
      renderTranscript();
    });

    audio.addEventListener('loadedmetadata', () => {
      if (durTimeSpan) durTimeSpan.textContent = formatTime(audio.duration);
    });

    if (canvas) {
      const ctx = canvas.getContext('2d');
      const bars = 56;
      const heights = Array(bars).fill(0);
      const freqData = new Uint8Array(128);

      function draw(time) {
        requestAnimationFrame(draw);
        const dpr = window.devicePixelRatio || 1;
        const w = canvas.clientWidth;
        const h = canvas.clientHeight;

        if (canvas.width !== w * dpr) {
          canvas.width = w * dpr;
          canvas.height = h * dpr;
        }

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, w, h);

        const isActive = isPlaying && analyser;
        if (isActive) {
          analyser.getByteFrequencyData(freqData);
        }

        const barWidth = (w - 165) / bars;

        for (let i = 0; i < bars; i++) {
          const normDist = Math.abs(i - bars / 2) / (bars / 2);
          let targetH;
          if (isActive) {
            const freqIdx = Math.floor((1 - normDist) * 46) + 2;
            targetH = 1.15 * Math.pow(freqData[freqIdx] / 255, 1.4);
          } else {
            targetH = 0.06 + 0.05 * Math.sin(time / 600 + 0.35 * i) * (1 - normDist);
          }

          heights[i] += (targetH - heights[i]) * 0.28;
          const bh = Math.max(3, Math.min(1, heights[i]) * h * 0.92);
          const bx = i * (barWidth + 3);
          const by = (h - bh) / 2;
          const alpha = 0.35 + 0.65 * (1 - normDist);

          ctx.fillStyle = `rgba(94, 234, 212, ${alpha})`;
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(bx, by, barWidth, bh, barWidth / 2);
          } else {
            ctx.rect(bx, by, barWidth, bh);
          }
          ctx.fill();
        }
      }

      requestAnimationFrame(draw);
    }

    selectCall(0, false);
  }

  // --- INTEGRATIONS TOGGLE CONTROLLER ---
  function initIntegrations() {
    const integrationsSection = document.getElementById('integrations');
    if (!integrationsSection) return;

    const toggleBtn = Array.from(integrationsSection.querySelectorAll('button')).find(btn => 
      btn.textContent.includes('integrations') || btn.textContent.includes('155+')
    );
    if (!toggleBtn) return;

    const btnWrapper = toggleBtn.closest('.mt-12') || toggleBtn.parentElement.parentElement || toggleBtn.parentElement;

    let drawer = document.getElementById('integrations-drawer');
    if (!drawer) {
      drawer = document.createElement('div');
      drawer.id = 'integrations-drawer';
      drawer.style.display = 'none';
      drawer.className = 'pt-8 transition-all duration-300';
      btnWrapper.appendChild(drawer);
    }

    let isOpen = false;
    let selectedIndustryIdx = 0;

    function renderBadge(p) {
      let icon = '';
      if (p.icon) {
        const mask = 'url(/integrations/' + p.icon + '.svg)';
        const bg = p.hex ? '#' + p.hex : '#ffffff';
        icon = '<span aria-hidden="true" class="h-[18px] w-[18px] shrink-0" style="background-color:' + bg + ';mask-image:' + mask + ';-webkit-mask-image:' + mask + ';mask-size:contain;-webkit-mask-size:contain;mask-repeat:no-repeat;-webkit-mask-repeat:no-repeat;mask-position:center;-webkit-mask-position:center"></span>';
      } else if (p.domain) {
        icon = '<img src="images/' + p.domain + '.png" onerror="this.src=\'/integrations/fav/' + p.domain + '.png\'" alt="" loading="lazy" class="h-[18px] w-[18px] shrink-0 rounded-[5px] bg-white object-contain p-[2px]">';
      } else {
        icon = '<span class="h-[18px] w-[18px] grid shrink-0 place-items-center rounded-[5px] bg-white/10 text-[9px] font-semibold text-white/70">' + p.name[0] + '</span>';
      }
      return '<span class="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] py-1.5 pl-2 pr-3 text-[13px] text-white/75 transition duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:text-white">' + icon + p.name + '</span>';
    }

    function buildDrawerHtml() {
      // 1. Core 6 categories grid
      let categoriesHtml = '<div class="grid gap-10 md:grid-cols-3 md:gap-x-12 md:gap-y-12">';
      integrationsData.categories.forEach(cat => {
        categoriesHtml += `
          <div>
            <h3 class="text-lg font-medium text-white">${cat.title}</h3>
            <p class="mt-2 text-sm leading-relaxed text-white/50">${cat.blurb}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              ${cat.platforms.map(renderBadge).join('')}
            </div>
          </div>`;
      });
      categoriesHtml += '</div>';

      // 2. Industry Software Card
      const currentIndustry = integrationsData.industries[selectedIndustryIdx] || integrationsData.industries[0];

      let tabsHtml = '';
      integrationsData.industries.forEach((ind, idx) => {
        const isSel = idx === selectedIndustryIdx;
        tabsHtml += `<button data-industry-idx="${idx}" class="industry-tab rounded-full px-3.5 py-1.5 text-[13px] transition ${isSel ? 'bg-teal-300 text-[#07090c] font-medium' : 'bg-white/[0.05] text-white/60 hover:bg-white/10 hover:text-white'}">${ind.title}</button>`;
      });

      const industryCardHtml = `
        <div class="mt-14 rounded-[28px] border border-white/[0.08] bg-[#07090c] p-6 sm:p-8">
          <div class="flex flex-col justify-between gap-2 md:flex-row md:items-end">
            <div>
              <h3 class="text-lg font-medium text-white">Industry software</h3>
              <p class="mt-1.5 text-sm leading-relaxed text-white/45">The system your business actually runs on, from field service to patient records. Pick your industry.</p>
            </div>
          </div>
          <div class="mt-6 flex flex-wrap gap-2" role="tablist">
            ${tabsHtml}
          </div>
          <div id="industry-platforms" class="mt-6 min-h-[96px] border-t border-white/[0.07] pt-6 flex flex-wrap gap-2">
            ${currentIndustry.platforms.map(renderBadge).join('')}
          </div>
        </div>`;

      return categoriesHtml + industryCardHtml;
    }

    function attachIndustryTabEvents() {
      const tabs = drawer.querySelectorAll('button[data-industry-idx]');
      const platformBox = drawer.querySelector('#industry-platforms');
      tabs.forEach(tab => {
        tab.addEventListener('click', function(e) {
          e.preventDefault();
          selectedIndustryIdx = parseInt(this.getAttribute('data-industry-idx'), 10);
          tabs.forEach((t, i) => {
            if (i === selectedIndustryIdx) {
              t.className = "industry-tab rounded-full px-3.5 py-1.5 text-[13px] transition bg-teal-300 text-[#07090c] font-medium";
            } else {
              t.className = "industry-tab rounded-full px-3.5 py-1.5 text-[13px] transition bg-white/[0.05] text-white/60 hover:bg-white/10 hover:text-white";
            }
          });
          const ind = integrationsData.industries[selectedIndustryIdx];
          if (platformBox && ind) {
            platformBox.innerHTML = ind.platforms.map(renderBadge).join('');
          }
        });
      });
    }

    toggleBtn.addEventListener('click', function(e) {
      e.preventDefault();
      isOpen = !isOpen;

      if (isOpen) {
        drawer.innerHTML = buildDrawerHtml();
        drawer.style.display = 'block';
        attachIndustryTabEvents();
        toggleBtn.innerHTML = 'Hide integrations<svg viewBox="0 0 16 16" class="h-3.5 w-3.5 transition-transform duration-300 rotate-180" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
        toggleBtn.setAttribute('aria-expanded', 'true');
      } else {
        drawer.style.display = 'none';
        toggleBtn.innerHTML = 'See all 155+ integrations<svg viewBox="0 0 16 16" class="h-3.5 w-3.5 transition-transform duration-300" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
        toggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Init all
  fetch('transcripts.json')
    .then(r => r.json())
    .then(data => {
      transcripts = data;
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          initPlayer();
          initIntegrations();
        });
      } else {
        initPlayer();
        initIntegrations();
      }
    })
    .catch(() => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          initPlayer();
          initIntegrations();
        });
      } else {
        initPlayer();
        initIntegrations();
      }
    });
})();
