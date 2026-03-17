import { useColor } from '../context/ColorContext';

export default function ColorSelector() {
  const { defaultColor, setDefaultColor } = useColor();

  return (
    <div className="color-selector">
      <label htmlFor="color-picker">Color por defecto: </label>
      <input
        id="color-picker"
        type="color"
        value={defaultColor}
        onChange={(e) => setDefaultColor(e.target.value)}
      />
      <div
        className="color-preview"
        style={{ backgroundColor: defaultColor }}
      />
    </div>
  );
}