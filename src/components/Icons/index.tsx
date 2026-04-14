/**
 * Sprout Design System — Icon Wrappers
 *
 * All icons sourced from phosphor-react-native.
 * The Figma icon page (↪︎ Icon, 1530 components) is the Phosphor icon set.
 *
 * Active icons  → weight="fill"    color="#186338" (brand/500)
 * Inactive icons → weight="regular" color="#7D715E" (warm brown)
 *
 * Usage:
 *   import { EventsIcon, MemoriesIcon } from '../Icons';
 *   <EventsIcon active={true} size={24} />
 */

import {
  Compass,
  Images,
  Sparkle,
  ChatCircleDots,
  Users,
  Eye,
  EyeSlash,
  PlusCircle,
  Cube,
  MagnifyingGlass,
  X,
  Check,
  CaretRight,
  CaretLeft,
  CaretDown,
  CaretUp,
  ArrowLeft,
  ArrowRight,
  Bell,
  Heart,
  HeartStraight,
  Star,
  ShareNetwork,
  DotsThree,
  DotsThreeVertical,
  Plus,
  Minus,
  Warning,
  Info,
  CheckCircle,
  XCircle,
  Camera,
  Image,
  Pencil,
  Trash,
  UploadSimple,
  DownloadSimple,
  MapPin,
  Calendar,
  Clock,
  User,
  UserCircle,
  Gear,
  SignOut,
  Lock,
  Envelope,
  Phone,
  Globe,
  Link,
  Copy,
  QrCode,
} from 'phosphor-react-native';
import React from 'react';

// ─── Colours ──────────────────────────────────────────────────────────────────

export const ICON_COLORS = {
  active:   '#186338',  // brand/500 — active tab, selected state
  inactive: '#7D715E',  // warm brown — default/inactive
  muted:    '#9AA0AD',  // grey/400 — disabled, placeholder
  error:    '#D64545',  // error/500
  white:    '#FFFFFF',
};

// ─── Base prop type ───────────────────────────────────────────────────────────

export interface IconProps {
  /** Whether the icon is in the active/selected state */
  active?: boolean;
  /** Override size in px (default 24) */
  size?: number;
  /** Override colour (ignores active/inactive logic) */
  color?: string;
}

// ─── Nav tab icons ─────────────────────────────────────────────────────────────
// Figma: active = fill weight, inactive = regular weight

export const EventsIcon = ({ active = false, size = 24, color }: IconProps) => (
  <Compass
    size={size}
    weight={active ? 'fill' : 'regular'}
    color={color ?? (active ? ICON_COLORS.active : ICON_COLORS.inactive)}
  />
);

export const MemoriesIcon = ({ active = false, size = 24, color }: IconProps) => (
  <Images
    size={size}
    weight={active ? 'fill' : 'regular'}
    color={color ?? (active ? ICON_COLORS.active : ICON_COLORS.inactive)}
  />
);

export const AIAssistIcon = ({ active = false, size = 24, color }: IconProps) => (
  <Sparkle
    size={size}
    weight={active ? 'fill' : 'regular'}
    color={color ?? (active ? ICON_COLORS.active : ICON_COLORS.inactive)}
  />
);

export const ChatIcon = ({ active = false, size = 24, color }: IconProps) => (
  <ChatCircleDots
    size={size}
    weight={active ? 'fill' : 'regular'}
    color={color ?? (active ? ICON_COLORS.active : ICON_COLORS.inactive)}
  />
);

export const ClubsIcon = ({ active = false, size = 24, color }: IconProps) => (
  <Users
    size={size}
    weight={active ? 'fill' : 'regular'}
    color={color ?? (active ? ICON_COLORS.active : ICON_COLORS.inactive)}
  />
);

// ─── Input / form icons ────────────────────────────────────────────────────────

/** Eye icon — password show/hide toggle. Pass `visible` to switch states. */
export const EyeIcon = ({
  visible = true,
  size = 20,
  color = ICON_COLORS.inactive,
}: {
  visible?: boolean;
  size?: number;
  color?: string;
}) => visible
  ? <Eye size={size} weight="regular" color={color} />
  : <EyeSlash size={size} weight="regular" color={color} />;

/** PlusCircle — left slot icon in Input Form 2 */
export const PlusCircleIcon = ({ size = 24, color = ICON_COLORS.inactive }: { size?: number; color?: string }) => (
  <PlusCircle size={size} weight="regular" color={color} />
);

/** Cube — inner leading icon in Input Form 2 */
export const CubeIcon = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) => (
  <Cube size={size} weight="regular" color={color} />
);

/** Search / magnifying glass */
export const SearchIcon = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) => (
  <MagnifyingGlass size={size} weight="regular" color={color} />
);

// ─── Action icons ──────────────────────────────────────────────────────────────

export const CloseIcon       = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <X size={size} weight="regular" color={color} />;

export const CheckIcon       = ({ size = 20, color = ICON_COLORS.active }: { size?: number; color?: string }) =>
  <Check size={size} weight="regular" color={color} />;

export const ArrowLeftIcon   = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <ArrowLeft size={size} weight="regular" color={color} />;

export const ArrowRightIcon  = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <ArrowRight size={size} weight="regular" color={color} />;

export const ChevronDownIcon = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <CaretDown size={size} weight="regular" color={color} />;

export const ChevronRightIcon = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <CaretRight size={size} weight="regular" color={color} />;

export const BellIcon        = ({ active = false, size = 24, color }: IconProps) =>
  <Bell size={size} weight={active ? 'fill' : 'regular'} color={color ?? (active ? ICON_COLORS.active : ICON_COLORS.inactive)} />;

export const HeartIcon       = ({ active = false, size = 24, color }: IconProps) =>
  <HeartStraight size={size} weight={active ? 'fill' : 'regular'} color={color ?? (active ? ICON_COLORS.active : ICON_COLORS.inactive)} />;

export const StarIcon        = ({ active = false, size = 24, color }: IconProps) =>
  <Star size={size} weight={active ? 'fill' : 'regular'} color={color ?? (active ? ICON_COLORS.active : ICON_COLORS.inactive)} />;

export const ShareIcon       = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <ShareNetwork size={size} weight="regular" color={color} />;

export const MoreIcon        = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <DotsThree size={size} weight="bold" color={color} />;

export const MoreVerticalIcon = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <DotsThreeVertical size={size} weight="bold" color={color} />;

export const AddIcon         = ({ size = 20, color = ICON_COLORS.active }: { size?: number; color?: string }) =>
  <Plus size={size} weight="regular" color={color} />;

// ─── Status / feedback icons ───────────────────────────────────────────────────

export const WarningIcon     = ({ size = 20, color = '#F59E0B' }: { size?: number; color?: string }) =>
  <Warning size={size} weight="fill" color={color} />;

export const InfoIcon        = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <Info size={size} weight="fill" color={color} />;

export const SuccessIcon     = ({ size = 20, color = ICON_COLORS.active }: { size?: number; color?: string }) =>
  <CheckCircle size={size} weight="fill" color={color} />;

export const ErrorIcon       = ({ size = 20, color = ICON_COLORS.error }: { size?: number; color?: string }) =>
  <XCircle size={size} weight="fill" color={color} />;

// ─── Content icons ─────────────────────────────────────────────────────────────

export const CameraIcon      = ({ size = 24, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <Camera size={size} weight="regular" color={color} />;

export const ImageIcon       = ({ size = 24, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <Image size={size} weight="regular" color={color} />;

export const EditIcon        = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <Pencil size={size} weight="regular" color={color} />;

export const DeleteIcon      = ({ size = 20, color = ICON_COLORS.error }: { size?: number; color?: string }) =>
  <Trash size={size} weight="regular" color={color} />;

export const UploadIcon      = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <UploadSimple size={size} weight="regular" color={color} />;

export const DownloadIcon    = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <DownloadSimple size={size} weight="regular" color={color} />;

export const LocationIcon    = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <MapPin size={size} weight="regular" color={color} />;

export const CalendarIcon    = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <Calendar size={size} weight="regular" color={color} />;

export const ClockIcon       = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <Clock size={size} weight="regular" color={color} />;

// ─── Profile / account icons ───────────────────────────────────────────────────

export const UserIcon        = ({ active = false, size = 24, color }: IconProps) =>
  <User size={size} weight={active ? 'fill' : 'regular'} color={color ?? (active ? ICON_COLORS.active : ICON_COLORS.inactive)} />;

export const UserCircleIcon  = ({ size = 24, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <UserCircle size={size} weight="regular" color={color} />;

export const SettingsIcon    = ({ size = 24, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <Gear size={size} weight="regular" color={color} />;

export const SignOutIcon     = ({ size = 20, color = ICON_COLORS.error }: { size?: number; color?: string }) =>
  <SignOut size={size} weight="regular" color={color} />;

export const LockIcon        = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <Lock size={size} weight="regular" color={color} />;

export const EmailIcon       = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <Envelope size={size} weight="regular" color={color} />;

export const PhoneIcon       = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <Phone size={size} weight="regular" color={color} />;

export const GlobeIcon       = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <Globe size={size} weight="regular" color={color} />;

export const LinkIcon        = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <Link size={size} weight="regular" color={color} />;

export const CopyIcon        = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <Copy size={size} weight="regular" color={color} />;

export const QRCodeIcon      = ({ size = 20, color = ICON_COLORS.inactive }: { size?: number; color?: string }) =>
  <QrCode size={size} weight="regular" color={color} />;
