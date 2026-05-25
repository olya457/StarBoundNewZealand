import React, {useEffect, useState} from 'react';
import {AppNavigator} from './navigation/AppNavigator';
import {LoadingScreen} from './screens/LoadingScreen';
import {OnboardingScreen} from './screens/OnboardingScreen';
import {useOnboarding} from './hooks/useOnboarding';
import {usePersistentIds} from './hooks/usePersistentIds';
import {storageKeys} from './utils/storage';

export default function App() {
  const onboarding = useOnboarding();
  const savedPlaces = usePersistentIds(storageKeys.savedPlaces);
  const savedArticles = usePersistentIds(storageKeys.savedArticles);
  const [loadingDone, setLoadingDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoadingDone(true), 5000);

    return () => clearTimeout(timer);
  }, []);

  if (
    !loadingDone ||
    !onboarding.ready ||
    !savedPlaces.ready ||
    !savedArticles.ready
  ) {
    return <LoadingScreen />;
  }

  if (!onboarding.seen) {
    return <OnboardingScreen onDone={onboarding.complete} />;
  }

  return (
    <AppNavigator
      savedPlaceIds={savedPlaces.ids}
      savedArticleIds={savedArticles.ids}
      onTogglePlace={savedPlaces.toggle}
      onRemovePlace={savedPlaces.remove}
      onToggleArticle={savedArticles.toggle}
    />
  );
}
