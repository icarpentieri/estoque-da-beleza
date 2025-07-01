import { Button } from './web/components/ui/Button/Button';

export function App() {
  return (
    <div>
      <div className="p-10">
        <div className="bg-DEFAULT"></div>
        <Button variant="default" className="bg-blush-light">
          Botão padrão
        </Button>
        <Button variant="outline" className="ml-4">
          Botão outline
        </Button>
        <Button variant="destructive" className="ml-4">
          Destrutivo
        </Button>
      </div>
    </div>
  );
}

export default App;
