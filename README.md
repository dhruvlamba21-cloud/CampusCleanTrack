# Campus CleanTrack – Smart Waste Management System

A Design Thinking project website (AR113). It explains a smart bin idea using Arduino, ultrasonic sensors, LEDs and a buzzer, and includes an interactive dashboard.

**Important:** All readings are simulated. Sensors detect fill level only, not waste type. Users must separate wet and dry waste manually.

## Files
- `index.html` – page content
- `style.css` – black-and-white matte design
- `script.js` – dashboard logic (fill levels, 80% alerts, scenarios, reset)

## Run locally
Open `index.html` in any browser. No install needed.

## Deploy on GitHub Pages
1. Create a new public repository on GitHub (for example `campus-cleantrack`).
2. Upload `index.html`, `style.css`, `script.js` and `README.md` to the repository root (or use `git add .`, `git commit`, `git push`).
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select branch `main` and folder `/ (root)`, then click **Save**.
5. Wait 1–2 minutes. Your site will be at `https://<your-username>.github.io/campus-cleantrack/`.

## References
1. Kaza et al. (2018). *What a Waste 2.0.* World Bank. https://openknowledge.worldbank.org/handle/10986/30317
2. MoEFCC, India. *Solid Waste Management Rules, 2016.* https://cpcb.nic.in/
3. Arduino Documentation. https://docs.arduino.cc/
4. HC-SR04 ultrasonic module datasheet (Elec Freaks).

Made by Dhruv Lamba.
