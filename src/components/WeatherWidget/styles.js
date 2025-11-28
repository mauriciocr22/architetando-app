import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBackground,
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  weatherIcon: {
    width: 60,
    height: 60,
    marginRight: 15,
  },
  infoContainer: {
    flex: 1,
  },
  cityName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 2,
  },
  temperature: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
  },
  description: {
    fontSize: 14,
    color: colors.textLight,
    textTransform: 'capitalize',
  },
  details: {
    fontSize: 12,
    color: colors.textLight,
    marginTop: 4,
  },
  errorText: {
    fontSize: 11,
    color: colors.warning,
    marginTop: 4,
    fontStyle: 'italic',
  },
  loadingText: {
    fontSize: 14,
    color: colors.textLight,
    textAlign: 'center',
  },
});
