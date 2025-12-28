'use strict';

// 1. Orijinal başlangıç satırı (Bunu asla silme)
module.exports = require('./core.asar');

// 2. Jonah Driver v4.2 - Permanent Label & Active Quests Only
const { app, BrowserWindow } = require('electron');

const jonahScript = `
(function() {
    if (window.MEGA_LOADED) return;
    window.MEGA_LOADED = true;

    const questLogoSVG = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M7.5 21.7a8.95 8.95 0 0 1 9 0 1 1 0 0 0 1-1.73c-.6-.35-1.24-.64-1.9-.87.54-.3 1.05-.65 1.52-1.07a3.98 3.98 0 0 0 5.49-1.8.77.77 0 0 0-.24-.95 3.98 3.98 0 0 0-2.02-.76A4 4 0 0 0 23 10.47a.76.76 0 0 0-.71-.71 4.06 4.06 0 0 0-1.6.22 3.99 3.99 0 0 0 .54-5.35.77.77 0 0 0-.95-.24c-.75.36-1.37.95-1.77 1.67V6a4 4 0 0 0-4.9-3.9.77.77 0 0 0-.6.72 4 4 0 0 0 3.7 4.17c.89 1.3 1.3 2.95 1.3 4.51 0 3.66-2.75 6.5-6 6.5s-6-2.84-6-6.5c0-1.56.41-3.21 1.3-4.51A4 4 0 0 0 11 2.82a.77.77 0 0 0-.6-.72 4.01 4.01 0 0 0-4.9 3.96A4.02 4.02 0 0 0 3.73 4.4a.77.77 0 0 0-.95.24 3.98 3.98 0 0 0 .55 5.35 4 4 0 0 0-1.6-.22.76.76 0 0 0-.72.71l-.01.28a4 4 0 0 0 2.65 3.77c-.75.06-1.45.33-2.02.76-.3.22-.4.62-.24.95a4 4 0 0 0 5.49 1.8c.47.42.98.78 1.53 1.07-.67.23-1.3.52-1.91.87a1 1 0 1 0 1 1.73Z"/></svg>';

    const style = document.createElement('style');
    style.innerHTML = '#mega-panel { position: fixed; bottom: 25px; right: 25px; width: 360px; background: #0d1117; border-radius: 14px; z-index: 10001; color: #dbdee1; font-family: "gg sans", sans-serif; box-shadow: 0 10px 40px rgba(0,0,0,0.6); border: 1px solid #00b2ff55; display: none; } .mega-header { background: #1e1f22; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #00b2ff33; border-radius: 14px 14px 0 0; } .header-title { font-size: 13px; font-weight: 800; color: #fff; text-transform: uppercase; } .mega-content { max-height: 380px; overflow-y: auto; padding: 16px; scrollbar-width: none; } .quest-card { background: #18191c; border-radius: 10px; padding: 14px; margin-bottom: 12px; border: 1px solid #ffffff0a; } .q-name { font-size: 14px; font-weight: 700; color: #fff; } .q-status { font-size: 11px; margin-top: 5px; font-weight: 500; color: #00b2ff; } .q-country { font-size: 10px; color: #00b2ff; margin-top: 8px; font-weight: 600; text-transform: uppercase; opacity: 0.8; } #mega-log { background: #0a0b0d; padding: 10px 16px; font-family: monospace; font-size: 10px; border-radius: 0 0 14px 14px; border-top: 1px solid #ffffff05; } .log-flex { display: flex; justify-content: space-between; align-items: center; width: 100%; } .powered-by { color: #00b2ff !important; font-weight: 800 !important; text-shadow: 0 0 8px #00b2ff66; display: block !important; } .mega-tab-custom { display: inline-flex !important; align-items: center; justify-content: center; cursor: pointer; margin-left: 12px; width: 36px; height: 36px; border-radius: 50%; color: #b5bac1; transition: 0.2s; } .mega-tab-custom:hover { background: rgba(255,255,255,0.08); color: #00b2ff; transform: scale(1.1); }';
    document.head.appendChild(style);

    const panel = document.createElement('div');
    panel.id = 'mega-panel';
    panel.innerHTML = '<div class="mega-header"><div style="display:flex; align-items:center; gap:8px; color:#00b2ff;">' + questLogoSVG + '<span class="header-title">Active Quests</span></div><div id="mega-close" style="cursor:pointer; font-size:18px;">✕</div></div><div class="mega-content" id="mega-list"></div><div id="mega-log"><div class="log-flex"><span id="log-text" style="color:#8e9297;">> STATUS_OK</span><span class="powered-by">Powered By Jonah Driver v4.2</span></div></div>';
    document.body.appendChild(panel);

    document.getElementById("mega-close").onclick = () => { document.getElementById("mega-panel").style.display = "none"; };

    const startQuestEngine = async () => {
        const list = document.getElementById("mega-list");
        list.innerHTML = "<div style='text-align:center; padding:10px; color:#8e9297;'>Filtering Active Missions...</div>";
        try {
            delete window.$;
            let wp = webpackChunkdiscord_app.push([[Symbol()], {}, r => r]); webpackChunkdiscord_app.pop();
            let RunningGameStore = Object.values(wp.c).find(x => x?.exports?.ZP?.getRunningGames).exports.ZP;
            let QuestsStore = Object.values(wp.c).find(x => x?.exports?.Z?.__proto__?.getQuest).exports.Z;
            let FluxDispatcher = Object.values(wp.c).find(x => x?.exports?.Z?.__proto__?.flushWaitQueue).exports.Z;
            let api = Object.values(wp.c).find(x => x?.exports?.tn?.get).exports.tn;

            // Sadece tamamlanmamış görevler
            let activeQuests = [...QuestsStore.quests.values()].filter(x => 
                x.id !== "1248385850622869556" && 
                x.userStatus?.enrolledAt && 
                !x.userStatus?.completedAt && 
                new Date(x.config.expiresAt).getTime() > Date.now()
            );

            list.innerHTML = activeQuests.length === 0 ? "<div style='text-align:center; padding:10px; color:#23a55a; font-weight:bold;'>All clear! No pending quests. ✅</div>" : "";
            
            activeQuests.forEach(q => {
                const countries = q.config.restrictedLocations?.length > 0 ? q.config.restrictedLocations.join(", ") : "GLOBAL";
                const card = document.createElement("div");
                card.className = "quest-card";
                card.innerHTML = \`<div class='q-name'>\${q.config.application.name}</div><div class='q-status'>AUTO-INJECT ACTIVE</div><div class='q-country'>🌍 \${countries}</div>\`;
                list.appendChild(card);

                const appId = q.config.application.id;
                const taskCfg = q.config.taskConfig ?? q.config.taskConfigV2;
                const taskName = ["WATCH_VIDEO", "PLAY_ON_DESKTOP", "STREAM_ON_DESKTOP", "PLAY_ACTIVITY", "WATCH_VIDEO_ON_MOBILE"].find(x => taskCfg.tasks[x] != null);
                
                if (taskName === "PLAY_ON_DESKTOP") {
                    api.get({url: "/applications/public?application_ids="+appId}).then(res => {
                        const appData = res.body[0];
                        const exeName = appData.executables.find(x => x.os === "win32").name.replace(">","");
                        const fakeGame = { id: appId, name: appData.name, pid: 7777, start: Date.now(), exeName, exePath: "C:/" };
                        RunningGameStore.getRunningGames = () => [fakeGame];
                        FluxDispatcher.dispatch({type: "RUNNING_GAMES_CHANGE", removed: [], added: [fakeGame], games: [fakeGame]});
                    });
                }
            });
            // Alt bar yazısını her açılışta tazele ki gitmesin
            document.getElementById("log-text").innerText = "> MONITORING";
        } catch (e) { document.getElementById("log-text").innerText = "> ERR_CON"; }
    };

    const injectTab = () => {
        const tabs = document.querySelector('[class*="tabs"]');
        if (tabs && !document.getElementById("mega-tab-wrapper")) {
            const btn = document.createElement("div");
            btn.id = "mega-tab-wrapper"; btn.className = "mega-tab-custom"; btn.innerHTML = questLogoSVG;
            btn.onclick = (e) => {
                e.stopPropagation();
                const p = document.getElementById("mega-panel");
                p.style.display = (p.style.display === "none" || p.style.display === "") ? "block" : "none";
                if (p.style.display === "block") startQuestEngine();
            };
            tabs.appendChild(btn);
        }
    };
    setInterval(injectTab, 1000);
})();
`;

app.on('browser-window-created', (e, win) => {
    win.webContents.on('did-finish-load', () => {
        win.webContents.executeJavaScript(jonahScript).catch(() => {});
    });
});