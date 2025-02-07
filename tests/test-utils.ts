export function mockI18n() {
  return {
    t: (msg: string) => msg
  };
}

export function mockSupabaseUser(userData = null) {
  return () => userData;
}

export function getGlobalMocks() {
  return {
    mocks: {
      $t: mockI18n().t
    }
  };
}
