<?php

declare(strict_types=1);

namespace App\Policies;

use Illuminate\Foundation\Auth\User as AuthUser;
use App\Models\StatusItem;
use Illuminate\Auth\Access\HandlesAuthorization;

class StatusItemPolicy
{
    use HandlesAuthorization;
    
    public function viewAny(AuthUser $authUser): bool
    {
        return $authUser->can('ViewAny:StatusItem');
    }

    public function view(AuthUser $authUser, StatusItem $statusItem): bool
    {
        return $authUser->can('View:StatusItem');
    }

    public function create(AuthUser $authUser): bool
    {
        return $authUser->can('Create:StatusItem');
    }

    public function update(AuthUser $authUser, StatusItem $statusItem): bool
    {
        return $authUser->can('Update:StatusItem');
    }

    public function delete(AuthUser $authUser, StatusItem $statusItem): bool
    {
        return $authUser->can('Delete:StatusItem');
    }

    public function restore(AuthUser $authUser, StatusItem $statusItem): bool
    {
        return $authUser->can('Restore:StatusItem');
    }

    public function forceDelete(AuthUser $authUser, StatusItem $statusItem): bool
    {
        return $authUser->can('ForceDelete:StatusItem');
    }

    public function forceDeleteAny(AuthUser $authUser): bool
    {
        return $authUser->can('ForceDeleteAny:StatusItem');
    }

    public function restoreAny(AuthUser $authUser): bool
    {
        return $authUser->can('RestoreAny:StatusItem');
    }

    public function replicate(AuthUser $authUser, StatusItem $statusItem): bool
    {
        return $authUser->can('Replicate:StatusItem');
    }

    public function reorder(AuthUser $authUser): bool
    {
        return $authUser->can('Reorder:StatusItem');
    }

}