import { computed, onMounted, onUnmounted, ref, watch } from "vue";

interface Fill {
  dark: string;
  light: string;
}

export function useDarkOrLight(fillDarkOrLight: Fill) {
  const localValue = ref<string | null>(null);

  if (typeof window !== 'undefined') {
    try {
      localValue.value = localStorage.getItem('vuepress-theme-hope-scheme') || '';
    } catch (error) {
      localValue.value = '';
    }
  }

  const isDark = () =>
    typeof window !== 'undefined' &&
    ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localValue.value === 'auto') || localValue.value === 'dark');

  const fill = ref(isDark() ? fillDarkOrLight.dark : fillDarkOrLight.light);

  const handleStorageChange = (event: StorageEvent) => {
    if (event.key === 'vuepress-theme-hope-scheme') {
      localValue.value = event.newValue;
      fill.value = isDark() ? fillDarkOrLight.dark : fillDarkOrLight.light;
    }
  };

  onMounted(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
    }
  });

  onUnmounted(() => {
    if (typeof window !== 'undefined') {
      window.removeEventListener('storage', handleStorageChange);
    }
  });

  return { fill, isDark };
}
