"use client";

import { useEffect, useRef } from "react";
import { moduleDelays } from "@/lib/moduleDelays";

/* ── Swirl SVG — mayali-main-3 birebir ── */
const SwirlSVG = () => (
  <svg
    width="1551" height="1601" viewBox="0 0 1551 1601"
    fill="none" xmlns="http://www.w3.org/2000/svg"
    className="site-loader-swirl-svg" aria-hidden="true"
  >
    <path
      d="M383.736 371.395C459.57 302.274 549.974 259.239 631.568 239.372C646.1 235.833 674.281 230.611 688.784 232.842C703.759 235.145 716.867 246.671 718.076 261.793C719.069 274.214 711.152 288.292 692.504 295.295C655.353 307.689 619.01 322.386 583.688 339.303C473.936 391.867 352.216 542.236 321.525 665.487C281.165 827.565 294.801 962.248 393.775 1111.61C429.806 1165.98 526.932 1261.16 620.693 1295.97C740.918 1340.93 863.395 1350.12 986.616 1300.4C1200.4 1214.11 1315.78 981.024 1251.92 768.456C1170.53 497.446 879.034 452.433 713.727 544.994C605.584 605.58 548.637 702.096 553.032 824.295C557.103 939.627 618.996 1025.91 726.891 1071.83C846.219 1123.01 988.36 1059.2 1022.52 939.516C1029.81 914.148 1031.64 876.233 1018.81 856.952C1010.47 844.419 1000.1 834.215 985.442 837.652C976.483 839.753 971.919 842.4 966.239 849.639C960.277 857.238 958.421 866.291 958.841 875.94C960.518 914.459 932.621 981.214 877.279 1005.18C817.329 1031.08 758.898 1018.38 707.635 981.056C622.603 919.065 604.142 784.702 659.108 693.297C731.209 566.285 980.336 503.157 1133.1 707.228C1274.66 896.285 1140.37 1215.82 889.681 1252.51C712.765 1278.41 572.724 1222.1 468.923 1074.62C359.777 918.766 349.698 756.681 443.417 593.947C545.355 417.254 716.004 322.077 908.633 325.42C1222.31 347.983 1491.39 596.564 1427.53 968.409C1383.61 1224.2 1241.87 1410.01 989.99 1492.89C799.446 1555.61 616.886 1515.81 448.893 1413.82C147.931 1231.15 94.9948 864.231 227.421 582.793C265.013 502.672 318.146 430.815 383.736 371.395Z"
      fill="#9B663A"
    />
    <path
      d="M984.113 14.7109C1109.34 37.4611 1219.81 94.2109 1300.81 159.711C1315.24 171.376 1341.6 195.233 1350.31 211.211C1359.31 227.711 1357.81 249.31 1343.81 261.883C1332.31 272.211 1312.47 275 1291.53 261.883C1251.35 234.58 1209.51 209.808 1166.24 187.712C1031.81 119.057 791.94 112.211 647.314 174.711C457.128 256.9 334.592 371.711 261.814 581.711C235.319 658.161 214.572 825.561 250.814 944.211C296.972 1096.59 380.09 1224.27 521.854 1308.34C767.836 1454.19 1084.49 1392.53 1246.03 1169.59C1451.99 885.362 1276.98 564.069 1061.3 470.739C920.174 409.707 782.148 426.197 664.967 522.501C554.312 613.317 515.82 739.282 551.742 880.231C591.091 1036.41 760.989 1128.53 904.708 1072.14C935.206 1060.23 973.967 1033.5 983.323 1006.34C989.406 988.687 991.658 970.779 977.239 958.914C968.425 951.662 962.38 949.153 950.967 949.001C938.988 948.841 928.664 953.824 919.467 961.501C882.749 992.145 795.931 1014.88 730.652 978.348C659.99 938.733 628.538 871.559 626.757 792.923C623.883 662.425 742.473 543.097 873.967 528.501C1053.47 504.001 1303.21 702.129 1216.97 1006.34C1137.1 1288.22 720.967 1396.3 496.111 1176.73C337.428 1021.78 287.55 841.315 354.844 627.969C426.369 403.052 578.6 271.124 809.592 241.054C1060.53 208.583 1282.81 305.211 1424.5 497.661C1638.33 823.928 1595.74 1276.33 1181.04 1493.23C895.772 1642.44 605.88 1642.52 334.592 1456.55C129.338 1315.88 31.1888 1105.91 5.3142 863.51C-41.0818 429.277 280.86 100.93 658.026 19.6865C765.319 -3.54953 876.16 -5.24104 984.113 14.7109Z"
      fill="#F2E5BC"
    />
  </svg>
);

interface SiteLoaderProps {
  onComplete?: () => void;
}

export default function SiteLoader({ onComplete }: SiteLoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loaderEl = loaderRef.current;
    if (!loaderEl) return;

    const wrapEl  = loaderEl.querySelector<HTMLElement>(".site-loader__wrap");
    const swirlEl = loaderEl.querySelector<HTMLElement>(".site-loader__swirl");
    let triggered = false;

    const startShrink = () => {
      if (triggered) return;
      triggered = true;

      const heroWrapper = document.querySelector<HTMLElement>("[data-hero-image-wrapper]");
      const heroImg     = document.querySelector<HTMLElement>("[data-hero-image]");

      if (!heroWrapper || !heroImg || !wrapEl) {
        document.body.classList.add("--js-ready");
        onComplete?.();
        return;
      }

      const rect = heroWrapper.getBoundingClientRect();
      const vw   = window.innerWidth;
      const vh   = window.innerHeight;

      const topPct    = ((rect.top              / vh) * 100).toFixed(3);
      const rightPct  = (((vw - rect.right)     / vw) * 100).toFixed(3);
      const bottomPct = (((vh - rect.bottom)    / vh) * 100).toFixed(3);
      const leftPct   = ((rect.left             / vw) * 100).toFixed(3);
      const targetClip = `inset(${topPct}% ${rightPct}% ${bottomPct}% ${leftPct}% round 20px)`;

      const wrapCenterX     = rect.left + rect.width  / 2;
      const wrapCenterY     = rect.top  + rect.height / 2;
      const targetSwirlSize = Math.round(Math.min(rect.width, rect.height) * 0.75);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (!wrapEl || !swirlEl) return;

          wrapEl.style.transition = "clip-path 850ms cubic-bezier(0.77, 0, 0.175, 1)";
          wrapEl.style.clipPath   = targetClip;

          const swirl   = swirlEl;
          const currentW = swirl.offsetWidth;
          const currentH = swirl.offsetHeight;
          swirl.style.transition = "none";
          swirl.style.transform  = "none";
          swirl.style.left       = `calc(50% - ${currentW / 2}px)`;
          swirl.style.top        = `calc(50% - ${currentH / 2}px)`;
          swirl.style.width      = `${currentW}px`;
          swirl.style.height     = `${currentH}px`;

          requestAnimationFrame(() => {
            swirl.style.transition = [
              "left   850ms cubic-bezier(0.77, 0, 0.175, 1)",
              "top    850ms cubic-bezier(0.77, 0, 0.175, 1)",
              "width  850ms cubic-bezier(0.77, 0, 0.175, 1)",
              "height 850ms cubic-bezier(0.77, 0, 0.175, 1)",
            ].join(", ");
            swirl.style.left   = `${wrapCenterX - targetSwirlSize / 2}px`;
            swirl.style.top    = `${wrapCenterY - targetSwirlSize / 2}px`;
            swirl.style.width  = `${targetSwirlSize}px`;
            swirl.style.height = `${targetSwirlSize}px`;
          });

          const onShrinkEnd = (e: TransitionEvent) => {
            if (e.target !== wrapEl) return;
            wrapEl.removeEventListener("transitionend", onShrinkEnd);

            heroWrapper.style.zIndex   = "10000";
            heroWrapper.style.position = "relative";

            heroImg.style.transition = "clip-path 380ms cubic-bezier(0.77, 0, 0.175, 1)";
            requestAnimationFrame(() => {
              heroImg.style.clipPath = "inset(0% 0% 0% 0% round 0px)";
            });

            swirlEl.style.transition = "opacity 200ms linear";
            swirlEl.style.opacity    = "0";

            setTimeout(() => {
              heroImg.style.transition   = "none";
              heroWrapper.style.zIndex   = "";
              heroWrapper.style.position = "";
              document.body.classList.add("--js-ready");
              requestAnimationFrame(() => moduleDelays(200, 300));
              /* Loader'ı tamamen gizle — scroll'da üstte kalmasın */
              if (loaderEl) loaderEl.style.display = "none";
              onComplete?.();
            }, 430);
          };

          wrapEl.addEventListener("transitionend", onShrinkEnd);
        });
      });
    };

    const img   = new window.Image();
    img.src     = "/hero_baklava.png";
    if (img.complete) {
      setTimeout(startShrink, 700);
    } else {
      img.onload  = startShrink;
      img.onerror = startShrink;
      setTimeout(startShrink, 2500);
    }

    return () => {
      img.onload  = null;
      img.onerror = null;
    };
  }, [onComplete]);

  return (
    <div ref={loaderRef} className="site-loader" aria-hidden="true" data-site-loader="">
      <div className="site-loader__wrap">
        <div className="site-loader__swirl">
          <SwirlSVG />
        </div>
      </div>
    </div>
  );
}
