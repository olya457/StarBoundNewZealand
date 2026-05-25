export type TabKey = 'routes' | 'map' | 'picker' | 'saved' | 'notes';

export type MainTarget =
  | {name: 'tabs'; tab: TabKey}
  | {name: 'place'; id: string; from: TabKey}
  | {name: 'article'; id: string; from: TabKey};

export type NavigateToPlace = (id: string) => void;
