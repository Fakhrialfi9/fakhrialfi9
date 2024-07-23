// Import Style
import dockStyle from "../../assets/style/components/dock.module.css";

// Import Database
import dockData from "../../database/dockData.js";

const dock = () => {
  return (
    <main>
      {/* Dock Contact */}
      <div className={dockStyle.main}>
        <div className={dockStyle.dock}>
          <div className={dockStyle.content}>
            <ul>
              {dockData.map((dock) => (
                <li key={dock.name} data-index={dock.index}>
                  <a href={dock.link} target='_blank' rel='noopener noreferrer'>
                    <dock.icon size={25} strokeWidth={2} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Dock Contact */}
    </main>
  );
};

export default dock;
