import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    marginBottom: 10,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 22,
    marginBottom: 8,
  },
  boldText: {
    fontWeight: '600',
    color: colors.primary,
  },
  mapContainer: {
    height: 280,
    borderRadius: 12,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.border,
    marginTop: 10,
    backgroundColor: colors.lightBackground,
  },
  mapPlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.white,
  },
  mapIcon: {
    fontSize: 48,
    marginBottom: 15,
  },
  mapTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
  mapSubtitle: {
    fontSize: 14,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 20,
  },
  mapButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 12,
  },
  mapButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  mapHint: {
    fontSize: 12,
    color: colors.textLight,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  contactIcon: {
    fontSize: 20,
    marginRight: 10,
    width: 30,
  },
  contactText: {
    fontSize: 14,
    color: colors.text,
    flex: 1,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});
