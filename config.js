/* 英文傳說：雲端資料庫設定
 * 未設定（null）時：APP 仍可完整使用，學習紀錄只存在各自的裝置，後台只看得到本機紀錄。
 * 設定 Firebase 後：學習紀錄會同步到雲端，老師登入後台可看到每位學習者。
 * 設定方式見「上線說明.md」第 3 節。把 Firebase 主控台提供的設定貼到下面，例如：
 *
 * window.EL_FIREBASE = {
 *   apiKey: "AIza...",
 *   authDomain: "your-project.firebaseapp.com",
 *   projectId: "your-project",
 *   appId: "1:123:web:abc"
 * };
 */
window.EL_FIREBASE = {
  apiKey: "AIzaSyB_Gn4kI6TtCaQL3kpiSgDDqmsnQ-5ChU8",
  authDomain: "elisa-english-b3d59.firebaseapp.com",
  projectId: "elisa-english-b3d59",
  storageBucket: "elisa-english-b3d59.firebasestorage.app",
  messagingSenderId: "555960979816",
  appId: "1:555960979816:web:ba020844fa29fd94bfc6dd"
};
